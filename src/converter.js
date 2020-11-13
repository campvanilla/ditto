const { readFile } = require('fs/promises');
const json5 = require('json5');

const { ANSI_COLOR_FROM_VSCODE: VSCODE_THEME_KEY_TO_ANSI_COLOR } = require('./constants');
const { hexToRGBA } = require('./utils/color');
const { iterm } = require('./utils/xml');

const readTheme = async (path) => {
  const contents = (await readFile(path)).toString();
  return json5.parse(contents);
};

exports.convertTheme = async ({ path }) => {
  const { colors } = await readTheme(path);

  const ansiColors = Object.entries(VSCODE_THEME_KEY_TO_ANSI_COLOR).map(([ansiKey, possibleColorKeys]) => {
    const colorKey = possibleColorKeys.find((key) => !!colors[key]);
    return {
      key: ansiKey,
      ...hexToRGBA(colors[colorKey]),
    };
  });

  return iterm.getThemeXML(ansiColors);
};
