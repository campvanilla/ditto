const path = require('path');
const { writeFile, stat, readdir } = require('fs/promises');
const { Select } = require('enquirer');
const { readFileSync } = require('fs');

const { EXTENSIONS_DIR, CLI_ARGS } = require('./constants');
const { convertTheme } = require('./converter');
const { renderHelp } = require('./help');
const { extractCliArguments } = require('./utils/cliArguments');

const getExtensions = async (extensionsDir) => {
  const entities = await readdir(extensionsDir);

  const extensions = [];

  for (let entity of entities) {
    const statResult = await stat(`${extensionsDir}/${entity}`);

    if (statResult.isDirectory()) {
      extensions.push(entity);
    }
  }

  return extensions;
};

const getThemes = (extensions, extensionsDir) => {
  const themes = {};

  extensions.forEach((extension) => {
    const packageJSON = readFileSync(`${extensionsDir}/${extension}/package.json`);
    const data = JSON.parse(packageJSON);

    if (data.contributes && Array.isArray(data.contributes.themes)) {
      data.contributes.themes.forEach((theme) => {
        themes[theme.label] = {
          name: theme.label,
          path: path.join(extensionsDir, extension, theme.path),
        };
      });
    }
  });

  return themes;
};

(async () => {
  try {
    const cliArgs = extractCliArguments(process.argv);

    if (cliArgs[CLI_ARGS.HELP]) {
      renderHelp();
    }

    console.log('Fetching extensions...');
    const extensions = await getExtensions(cliArgs[CLI_ARGS.EXTENSIONS_DIR_ARG] || EXTENSIONS_DIR);

    console.log('Filtering out themes...');
    const themes = getThemes(extensions, cliArgs[CLI_ARGS.EXTENSIONS_DIR_ARG] || EXTENSIONS_DIR);

    const prompt = new Select({
      name: 'themes',
      message: 'Select the vscode theme:',
      choices: Object.keys(themes),
    });

    const answer = await prompt.run();

    const selectedTheme = themes[answer];

    const iTermTheme = await convertTheme(selectedTheme);
    const fileName = `${selectedTheme.name}-${Date.now()}.itermcolors`;

    const fileToWrite = cliArgs[CLI_ARGS.OUTPUT_DIR] ? `${cliArgs[CLI_ARGS.OUTPUT_DIR]}/${fileName}` : fileName;

    await writeFile(fileToWrite, iTermTheme, { encoding: 'utf-8' });

    console.log(`Theme file exported as ${path.resolve(fileToWrite)}`);
  } catch (e) {
    if (!e) {
      process.exit(-1);
    }

    console.error('Something went wrong!', e);
  }
})();
