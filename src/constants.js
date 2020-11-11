const homedir = require('os').homedir();

module.exports = {
  THEME_CATEGORY: 'Themes',

  /**
   * TODO:
   * 1. Generalise this for MacOS, Windowsm, Linux
   * 2. Take this as parameter (optional)
   */
  EXTENSIONS_DIR: `${homedir}/.vscode/extensions`,
};
