const path = require('path');

const { stat, readdir, readFile } = require('./promises');

exports.getExtensions = async (extensionsDir) => {
  const entities = await readdir(extensionsDir);

  const extensions = [];

  for (let entity of entities) {
    const statResult = await stat(path.join(extensionsDir, entity));

    if (statResult.isDirectory()) {
      extensions.push(entity);
    }
  }

  return extensions;
};

exports.getThemes = async (extensions, extensionsDir) => {
  let themes = {};

  for (let extension of extensions) {
    const packageJSON = await readFile(`${extensionsDir}/${extension}/package.json`);
    const data = JSON.parse(packageJSON);
    const { themes: contributingThemes } = data.contributes || {};

    if (Array.isArray(contributingThemes)) {
      contributingThemes.forEach(({ label, path: themePath }) => {
        themes[label] = {
          name: label,
          path: path.join(extensionsDir, extension, themePath),
        };
      });
    }
  }

  return themes;
};
