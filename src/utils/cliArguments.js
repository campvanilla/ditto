exports.extractCliArguments = () => {
  const cliArgs = {};

  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i].indexOf('=') !== -1) {
      const [option, value] = process.argv[i].split('=');

      cliArgs[option] = value;
    } else {
      const option = process.argv[i];
      const value = process.argv[i + 1];
      cliArgs[option] = value || true;

      i += 1;
    }
  }

  return cliArgs;
};
