const { EXTENSIONS_DIR } = require('./constants');

exports.renderHelp = () => {
  console.log('Usage: ditto <options>');

  console.log('Options:');
  console.log(
    `\t--extensionsDir\t(Optional) Path to directory containing your vscode extensions. (Default: ${EXTENSIONS_DIR})`
  );
  console.log(`\t--outputDir\t(Optional) Path to save the iterm theme. (Default: ${process.cwd()})`);
  process.exit(0);
};
