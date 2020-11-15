const { CLI_ARGS } = require('../constants');

exports.verboseLog = (message) => {
  if (global.cliArgs[CLI_ARGS.VERBOSE.key]) {
    console.log(`[Verbose] ${message}`);
  }
};
