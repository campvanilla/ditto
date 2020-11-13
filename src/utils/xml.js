const getItermColorComponent = (color) => `
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

const getItermThemeXML = (colors) => {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
${colors.map(getItermColorComponent).join('')}
</dict>
</plist>
  `;
};

exports.iterm = {
  getColorComponent: getItermColorComponent,
  getThemeXML: getItermThemeXML,
};
