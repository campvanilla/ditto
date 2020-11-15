const homedir = require('os').homedir();

/**
 * TODO:
 * 1. Generalise this for MacOS, Windowsm, Linux
 * 2. Take this as parameter (optional)
 */
exports.EXTENSIONS_DIR = `${homedir}/.vscode/extensions`;

exports.CLI_ARGS = {
  EXTENSIONS_DIR: {
    key: '--extensionsDir',
    helpText: 'Path to directory containing your vscode extensions.',
    optional: true,
    defaultValue: () => exports.EXTENSIONS_DIR,
  },
  OUTPUT_DIR: {
    key: '--outDir',
    helpText: 'Folder to save the iterm2 theme.',
    optional: true,
    defaultValue: () => process.cwd(),
  },
  HELP: {
    key: '--help',
    helpText: 'CLI documentation',
    optional: true,
  },
};

exports.VALID_ARGS = Object.keys(exports.CLI_ARGS).map((arg) => exports.CLI_ARGS[arg].key);

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
  'Bold Color': [],
  'Cursor Color': ['terminalCursor.foreground', 'editorCursor.foreground'],
  'Cursor Text Color': ['terminalCursor.foreground', 'editorCursor.foreground'],
  'Foreground Color': ['terminal.foreground', 'editor.foreground'],
  'Selected Text Color': ['terminal.background', 'editor.background'],
  'Selection Color': ['terminal.selectionBackground', 'terminal.foreground', 'editor.foreground'],
  'Link Color': ['textLink.foreground'],
};

exports.DEFAULT_FALLBACK_COLORS = {
  dark: {
    'Ansi 0 Color': '#000000',
    'Ansi 1 Color': '#cd3131',
    'Ansi 10 Color': '#23d18b',
    'Ansi 11 Color': '#f5f543',
    'Ansi 12 Color': '#3b8eea',
    'Ansi 13 Color': '#d670d6',
    'Ansi 14 Color': '#29b8db',
    'Ansi 15 Color': '#e5e5e5',
    'Ansi 2 Color': '#0dbc79',
    'Ansi 3 Color': '#e5e510',
    'Ansi 4 Color': '#2472c8',
    'Ansi 5 Color': '#bc3fbc',
    'Ansi 6 Color': '#11a8cd',
    'Ansi 7 Color': '#e5e5e5',
    'Ansi 8 Color': '#666666',
    'Ansi 9 Color': '#f14c4c',
    'Background Color': '#1e1e1e',
    'Bold Color': '#d6d6d6ff',
    'Cursor Color': '#d6d6d6ff',
    'Cursor Guide Color': '#15fcdc40',
    'Cursor Text Color': '#282828ff',
    'Foreground Color': '#cccccc',
    'Link Color': '#729a60ff',
    'Selected Text Color': '#000000',
    'Selection Color': '#ffffff40',
    'Tab Color': '#bf1a12ff',
  },
  light: {
    'Ansi 0 Color': '#000000',
    'Ansi 1 Color': '#cd3131',
    'Ansi 10 Color': '#14ce14',
    'Ansi 11 Color': '#b5ba00',
    'Ansi 12 Color': '#0451a5',
    'Ansi 13 Color': '#bc05bc',
    'Ansi 14 Color': '#0598bc',
    'Ansi 15 Color': '#a5a5a5',
    'Ansi 2 Color': '#00bc00',
    'Ansi 3 Color': '#949800',
    'Ansi 4 Color': '#0451a5',
    'Ansi 5 Color': '#bc05bc',
    'Ansi 6 Color': '#0598bc',
    'Ansi 7 Color': '#555555',
    'Ansi 8 Color': '#666666',
    'Ansi 9 Color': '#cd3131',
    'Background Color': '#ffffff',
    'Bold Color': '#000000',
    'Cursor Color': '#000000',
    'Cursor Guide Color': '#15fcdc40',
    'Cursor Text Color': '#282828',
    'Foreground Color': '#333333',
    'Link Color': '#729a60ff',
    'Selected Text Color': '#000000',
    'Selection Color': '#d0d0d0ff',
    'Tab Color': '#bf1a12ff',
  },
};
