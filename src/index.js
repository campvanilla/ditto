#!/usr/bin/env node

const path = require('path');
const { writeFile } = require('fs/promises');
const { Select } = require('enquirer');

const { EXTENSIONS_DIR, CLI_ARGS } = require('./constants');
const { convertTheme } = require('./converter');
const { renderHelp } = require('./help');
const { extractCliArguments } = require('./utils/cliArguments');
const { getExtensions, getThemes } = require('./utils/vscode');

const createAndWriteTheme = async (options) => {
  const { theme, directory = '' } = options || {};

  const fileName = `${theme.name}-${Date.now()}.itermcolors`;
  const filePath = path.join(directory, fileName);

  const iTermTheme = await convertTheme(theme);

  await writeFile(filePath, iTermTheme, { encoding: 'utf-8' });
  return filePath;
};

async function main() {
  try {
    const cliArgs = extractCliArguments(process.argv);

    if (cliArgs[CLI_ARGS.HELP]) {
      renderHelp();
    }

    const vscodeExtensionsPath = cliArgs[CLI_ARGS.EXTENSIONS_DIR_ARG] || EXTENSIONS_DIR;

    console.log('Fetching extensions...');
    const extensions = await getExtensions(vscodeExtensionsPath);

    console.log('Filtering out themes...');
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
      directory: cliArgs[CLI_ARGS.OUTPUT_DIR],
    });

    console.log(`Theme file exported as ${path.resolve(writtenPath)}`);
  } catch (e) {
    if (!e) {
      process.exit(-1);
    }

    console.error('Something went wrong!', e);
  }
}

main();
