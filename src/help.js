const { CLI_ARGS } = require('./constants');

exports.renderHelp = () => {
  console.log('Usage: ditto <options>');

  console.log('Options:');

  Object.keys(CLI_ARGS).forEach((arg) => {
    const { key, optional, defaultValue, helpText } = CLI_ARGS[arg];

    console.log(
      `\t${key}\t${optional ? '(Optional) ' : ''}${helpText} ${defaultValue ? `Default: ${defaultValue()}` : ''}`
    );
  });
  process.exit(0);
};
