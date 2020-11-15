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

  it('parses CLI consecutive arguments with no value as boolean', () => {
    const cliArgs = extractCliArguments([
      'node',
      'jest',
      '--help',
      '--verbose',
      '--out-dir=blahOut',
      '--extensions-dir',
      'blahIn',
      '--dry-run',
    ]);

    expect(cliArgs['--help']).toBe(true);
    expect(cliArgs['--verbose']).toBe(true);
    expect(cliArgs['--dry-run']).toBe(true);
    expect(cliArgs['--out-dir']).toBe('blahOut');
    expect(cliArgs['--extensions-dir']).toBe('blahIn');
  });
});
