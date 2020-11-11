const { readFile } = require('fs/promises');
const json5 = require('json5');

const { ANSI_COLOR_FROM_VSCODE: VSCODE_THEME_KEY_TO_ANSI_COLOR } = require('./constants');

const readTheme = async (path) => {
  const contents = (await readFile(path)).toString();
  return json5.parse(contents);
};

const hexToRGBA = (hex) => {
  if (hex.length >= 6) {
    const [red, green, blue, alpha] = hex.replace(/#/, '').match(/../g);
    return {
      red: parseInt(red, 16) / 255.0,
      green: parseInt(green, 16) / 255.0,
      blue: parseInt(blue, 16) / 255.0,
      alpha: alpha ? parseInt(blue, 16) / 255.0 : 1,
    };
  }
  throw 'less than 6';
};

const createItermColorComponent = (color) => `
  <key>${color.key}</key>
  <dict>
    <key>Alpha Component</key>
    <real>${color.alpha}</real>
    <key>Blue Component</key>
    <real>${color.blue}</real>
    <key>Color Space</key>
    <string>sRGB</string>
    <key>Green Component</key>
    <real>${color.green}</real>
    <key>Red Component</key>
    <real>${color.red}</real>
  </dict>
`;

const toItermXML = (colors) => {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
${colors.map(createItermColorComponent).join('')}
</dict>
</plist>
  `;
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

  return toItermXML(ansiColors);
};
