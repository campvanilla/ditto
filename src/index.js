#!/usr/bin/env node

const path = require('path');
const style = require('ansi-styles');
const { Select } = require('enquirer');

const { writeFile } = require('./utils/promises');
const { EXTENSIONS_DIR, CLI_ARGS } = require('./constants');
const { convertTheme } = require('./converter');
const { renderHelp } = require('./help');
const { extractCliArguments } = require('./utils/cliArguments');
const { getExtensions, getThemes } = require('./utils/vscode');
const { validateArgs } = require('./utils/validateArgs');

const createAndWriteTheme = async (options) => {
  const { theme, directory = '.' } = options || {};

  const fileName = `${theme.name}-${Date.now()}.itermcolors`;
  const filePath = path.resolve(directory, fileName);

  const iTermTheme = await convertTheme(theme);

  if (!global.cliArgs[CLI_ARGS.DRY_RUN.key]) {
    await writeFile(filePath, iTermTheme, { encoding: 'utf-8' });
  }

  return filePath;
};

async function main() {
  try {
    global.cliArgs = extractCliArguments(process.argv);

    if (global.cliArgs[CLI_ARGS.HELP.key] || !validateArgs(global.cliArgs)) {
      renderHelp();
    }

    const vscodeExtensionsPath = global.cliArgs[CLI_ARGS.EXTENSIONS_DIR.key] || EXTENSIONS_DIR;

    const extensions = await getExtensions(vscodeExtensionsPath);

    const themes = await getThemes(extensions, vscodeExtensionsPath);

    const prompt = new Select({
      name: 'themes',
      message: 'Select the vscode theme:',
      choices: Object.keys(themes),
    });

    const answer = await prompt.run();
    const selectedTheme = themes[answer];

    const writtenPath = await createAndWriteTheme({
      theme: selectedTheme,
      directory: global.cliArgs[CLI_ARGS.OUTPUT_DIR],
    });

    console.log(`Theme file exported as ${style.green.open}${writtenPath}${style.green.close}`);
  } catch (e) {
    if (!e) {
      process.exit(-1);
    }

    console.error('Something went wrong!', e);
  }
}

main();
