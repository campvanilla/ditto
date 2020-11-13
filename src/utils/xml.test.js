const { iterm } = require('./xml');

describe('iterm', () => {
  const colors = [
    {
      key: 'Foreground Color',
      red: 0.16862745098039217,
      green: 0.7333333333333333,
      blue: 0.6784313725490196,
      alpha: 0.34509803921568627,
    },
    {
      key: 'Background Color',
      red: 0.16862745098039217,
      green: 0.7333333333333333,
      blue: 0.6784313725490196,
      alpha: 0.34509803921568627,
    },
    { key: 'ANSI Color 0', red: 0, green: 0, blue: 0, alpha: 1 },
    { key: 'ANSI Color 1', red: 1, green: 1, blue: 0, alpha: 1 },
  ];
  describe('getColorComponent()', () => {
    it('generates the right xml color component', () => {
      expect(iterm.getColorComponent(colors[0])).toMatchSnapshot();
    });
  });

  describe('getThemeXML()', () => {
    it(`generates an xml theme file`, () => {
      expect(iterm.getThemeXML(colors)).toMatchSnapshot();
    });
  });
});
