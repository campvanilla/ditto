const path = require('path');
const fs = require('fs');
const { Select } = require('enquirer');
const { THEME_CATEGORY, EXTENSIONS_DIR } = require('./constants');

const getExtensions = async () => {
  const entities = await fs.promises.readdir(EXTENSIONS_DIR);

  const extensions = [];

  for (let entity of entities) {
    const stat = await fs.promises.stat(`${EXTENSIONS_DIR}/${entity}`);

    if (stat.isDirectory()) {
      extensions.push(entity);
    }
  }

  return extensions;
};

const getThemes = (extensions) => {
  const themes = {};

  extensions.forEach((extension) => {
    const packageJSON = fs.readFileSync(`${EXTENSIONS_DIR}/${extension}/package.json`);
    const data = JSON.parse(packageJSON);

    if (data.categories.includes(THEME_CATEGORY) && Array.isArray(data.contributes.themes)) {
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

    console.log(selectedTheme);
  } catch (e) {
    console.error('Something went wrong!', e);
  }
})();
