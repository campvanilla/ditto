const path = require('path');
const fs = require('fs');
const homedir = require("os").homedir();

const THEME_CATEGORY = 'Themes';

/**
 * TODO:
 * 1. Generalise this for MacOS, Windowsm, Linux
 * 2. Take this as parameter (optional)
 */
const EXTENSIONS_DIR = `${homedir}/.vscode/extensions`;

const getExtensions = async () => {
  const entities = await fs.promises.readdir(EXTENSIONS_DIR);

  const extensions = [];

  for (entity of entities) {
    const stat = await fs.promises.stat(`${EXTENSIONS_DIR}/${entity}`);
    
    if (stat.isDirectory()) {
      extensions.push(entity);
    }
  
  }

  return extensions;
}

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
    console.error("Something went wrong!", e);
  }
})();