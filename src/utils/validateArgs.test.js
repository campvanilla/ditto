const { validateArgs } = require('./validateArgs');
const { CLI_ARGS } = require('../constants');

describe('validateArgs()', () => {
  it('Returns true if all arguments are valid arguments', () => {
    const result = validateArgs({
      [CLI_ARGS.EXTENSIONS_DIR.key]: true,
      [CLI_ARGS.HELP.key]: true,
    });

    expect(result).toBe(true);
  });

  it('Returns false if even one argument is invalid', () => {
    const result = validateArgs({
      blah: true,
      [CLI_ARGS.HELP.key]: true,
    });

    expect(result).toBe(false);
  });
});
