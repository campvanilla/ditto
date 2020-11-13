exports.extractCliArguments = (argsList) => {
  const cliArgs = {};

  for (let i = 2; i < argsList.length; i++) {
    if (argsList[i].indexOf('=') !== -1) {
      const [option, value] = argsList[i].split('=');

      cliArgs[option] = value;
    } else {
      const option = argsList[i];
      const value = argsList[i + 1];
      cliArgs[option] = value || true;

      i += 1;
    }
  }

  return cliArgs;
};
