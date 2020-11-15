const json5 = require('json5');

const { iterm } = require('./utils/xml');
const { hexToRGBA } = require('./utils/color');
const { readFile } = require('./utils/promises');
const { ANSI_COLOR_FROM_VSCODE: VSCODE_THEME_KEY_TO_ANSI_COLOR, DEFAULT_FALLBACK_COLORS } = require('./constants');
const { verboseLog } = require('./utils/verboseLog');

const readTheme = async (path) => {
  const contents = (await readFile(path)).toString();
  return json5.parse(contents);
};

const getItermColor = ({ themeType, name, vscodeTheme }) => {
  const possibleKeys = VSCODE_THEME_KEY_TO_ANSI_COLOR[name];
  const vscodeColor = possibleKeys.find((color) => !!vscodeTheme[color]);

  if (vscodeColor) {
    verboseLog(`Selecting ${vscodeColor} for ${name}`);
    return vscodeTheme[vscodeColor];
  }
  const fallback = DEFAULT_FALLBACK_COLORS[themeType][name];
  console.warn(`The theme is missing a color for ${name}, using fallback for ${themeType} themes ${fallback}`);
  return fallback;
};

exports.convertTheme = async ({ path }) => {
  const { colors: vscodeTheme, type: themeType } = await readTheme(path);

  const itermColors = Object.keys(VSCODE_THEME_KEY_TO_ANSI_COLOR).map((name) => {
    verboseLog(`Parsing ${name} from theme file`);

    const colorHex = getItermColor({ name, themeType, vscodeTheme });
    const colorRBA = hexToRGBA(colorHex);

    verboseLog(
      `Converting ${colorHex} => rgba(${colorRBA.red}, ${colorRBA.green}, ${colorRBA.blue}, ${colorRBA.alpha})\n`
    );
    return {
      key: name,
      ...colorRBA,
    };
  });

  return iterm.getThemeXML(itermColors);
};
