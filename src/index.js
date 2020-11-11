const path = require('path');
const fs = require('fs');
// const { Command } = require('commander');
const { THEME_CATEGORY, EXTENSIONS_DIR } = require('./constants');

// const program = new Command();

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
  const themes = [];

  extensions.forEach((extension) => {
    const packageJSON = fs.readFileSync(`${EXTENSIONS_DIR}/${extension}/package.json`);
    const data = JSON.parse(packageJSON);

    if (data.categories.includes(THEME_CATEGORY) && Array.isArray(data.contributes.themes)) {
      data.contributes.themes.forEach((theme) => {
        themes.push({
          name: theme.label,
          path: path.join(EXTENSIONS_DIR, extension, theme.path),
        });
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

    console.log(themes);
  } catch (e) {
    console.error('Something went wrong!', e);
  }
})();
