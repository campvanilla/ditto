const { VALID_ARGS } = require('../constants');

exports.validateArgs = (cliArgs) => {
  const trimmedArgs = VALID_ARGS.reduce((agg, arg) => {
    // eslint-disable-next-line no-unused-vars
    const { [arg]: argToStrip, ...rest } = agg;

    return rest;
  }, cliArgs);

  if (Object.keys(trimmedArgs).length > 0) {
    return false;
  }

  return true;
};
