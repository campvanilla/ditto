const homedir = require('os').homedir();

/**
 * TODO:
 * 1. Generalise this for MacOS, Windowsm, Linux
 * 2. Take this as parameter (optional)
 */
exports.EXTENSIONS_DIR = `${homedir}/.vscode/extensions`;

exports.CLI_ARGS = {
  EXTENSIONS_DIR: '--extensionsDir',
  HELP: '--help',
  OUTPUT_DIR: '--outputDir',
};

exports.ANSI_COLOR_FROM_VSCODE = {
  'Ansi 0 Color': ['terminal.ansiBlack'],
  'Ansi 1 Color': ['terminal.ansiRed'],
  'Ansi 10 Color': ['terminal.ansiBrightGreen'],
  'Ansi 11 Color': ['terminal.ansiBrightYellow'],
  'Ansi 12 Color': ['terminal.ansiBrightBlue'],
  'Ansi 13 Color': ['terminal.ansiBrightMagenta'],
  'Ansi 14 Color': ['terminal.ansiBrightCyan'],
  'Ansi 15 Color': ['terminal.ansiBrightWhite'],
  'Ansi 2 Color': ['terminal.ansiGreen'],
  'Ansi 3 Color': ['terminal.ansiYellow'],
  'Ansi 4 Color': ['terminal.ansiBlue'],
  'Ansi 5 Color': ['terminal.ansiMagenta'],
  'Ansi 6 Color': ['terminal.ansiCyan'],
  'Ansi 7 Color': ['terminal.ansiWhite'],
  'Ansi 8 Color': ['terminal.ansiBrightBlack'],
  'Ansi 9 Color': ['terminal.ansiBrightRed'],
  'Background Color': ['terminal.background', 'editor.background'],
  // 'Bold Color': [],
  'Cursor Color': ['terminalCursor.foreground', 'editorCursor.foreground'],
  'Cursor Text Color': ['terminalCursor.foreground', 'editorCursor.foreground'],
  'Foreground Color': ['terminal.foreground', 'editor.foreground'],
  'Selected Text Color': ['terminal.background', 'editor.background'],
  'Selection Color': ['terminal.foreground', 'editor.foreground'],
  'Link Color': ['textLink.foreground'],
};
