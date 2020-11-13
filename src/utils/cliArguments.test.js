const { extractCliArguments } = require('./cliArguments');

describe('extractCliArguments()', () => {
  it('parses CLI arguments with = separator', () => {
    process.argv = ['node', 'jest', '--arg1=blah', '--arg2=blah2'];

    const cliArgs = extractCliArguments();

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with space separator', () => {
    process.argv = ['node', 'jest', '--arg1', 'blah', '--arg2', 'blah2'];

    const cliArgs = extractCliArguments();

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with both types of separators', () => {
    process.argv = ['node', 'jest', '--arg1=blah', '--arg2', 'blah2'];

    const cliArgs = extractCliArguments();

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with no value as boolean', () => {
    process.argv = ['node', 'jest', '--help'];

    const cliArgs = extractCliArguments();

    expect(cliArgs['--help']).toBe(true);
  });
});
