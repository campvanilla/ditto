const { ANSI_COLOR_FROM_VSCODE, DEFAULT_FALLBACK_COLORS } = require('./constants');

describe('has defaults for iterm colors', () => {
  const requiredColors = Object.keys(ANSI_COLOR_FROM_VSCODE);
  const assertEachColorExists = (key) => [
    '%s',
    (colorName) => {
      expect(typeof DEFAULT_FALLBACK_COLORS[key][colorName]).toBe('string');
    },
  ];

  describe('dark theme contains:', () => {
    it.each(requiredColors)(...assertEachColorExists('dark'));
  });

  describe('light theme contains:', () => {
    it.each(requiredColors)(...assertEachColorExists('light'));
  });
});
