const homedir = require('os').homedir();

/**
 * TODO:
 * 1. Generalise this for MacOS, Windowsm, Linux
 * 2. Take this as parameter (optional)
 */
exports.EXTENSIONS_DIR = `${homedir}/.vscode/extensions`;
