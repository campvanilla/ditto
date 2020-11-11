const path = require('path');
const { writeFile, stat, readdir } = require('fs/promises');
const { Select } = require('enquirer');
const { readFileSync } = require('fs');

const { EXTENSIONS_DIR } = require('./constants');
const { convertTheme } = require('./converter');

const getExtensions = async () => {
  const entities = await readdir(EXTENSIONS_DIR);

  const extensions = [];

  for (let entity of entities) {
    const statResult = await stat(`${EXTENSIONS_DIR}/${entity}`);

    if (statResult.isDirectory()) {
      extensions.push(entity);
    }
  }

  return extensions;
};

const getThemes = (extensions) => {
  const themes = {};

  extensions.forEach((extension) => {
    const packageJSON = readFileSync(`${EXTENSIONS_DIR}/${extension}/package.json`);
    const data = JSON.parse(packageJSON);

    if (Array.isArray(data.contributes.themes)) {
      data.contributes.themes.forEach((theme) => {
        themes[theme.label] = {
          name: theme.label,
          path: path.join(EXTENSIONS_DIR, extension, theme.path),
        };
      });
    }
  });

  return themes;
};

(async () => {
  try {
    console.log('Fetching extensions...');
    const extensions = await getExtensions();

    console.log('Filtering out themes...');
    const themes = getThemes(extensions);

    const prompt = new Select({
      name: 'themes',
      message: 'Select the vscode theme:',
      choices: Object.keys(themes),
    });

    const answer = await prompt.run();

    const selectedTheme = themes[answer];

    const iTermTheme = await convertTheme(selectedTheme);
    const fileName = `${selectedTheme.name}-${Date.now()}.itermcolors`;

    await writeFile(fileName, iTermTheme, { encoding: 'utf-8' });
  } catch (e) {
    console.error('Something went wrong!', e);
  }
})();
