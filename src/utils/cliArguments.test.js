const { extractCliArguments } = require('./cliArguments');

describe('extractCliArguments()', () => {
  it('parses CLI arguments with = separator', () => {
    const cliArgs = extractCliArguments(['node', 'jest', '--arg1=blah', '--arg2=blah2']);

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with space separator', () => {
    const cliArgs = extractCliArguments(['node', 'jest', '--arg1', 'blah', '--arg2', 'blah2']);

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with both types of separators', () => {
    const cliArgs = extractCliArguments(['node', 'jest', '--arg1=blah', '--arg2', 'blah2']);

    expect(cliArgs['--arg1']).toBe('blah');
    expect(cliArgs['--arg2']).toBe('blah2');
  });

  it('parses CLI arguments with no value as boolean', () => {
    const cliArgs = extractCliArguments(['node', 'jest', '--help']);

    expect(cliArgs['--help']).toBe(true);
  });
});
