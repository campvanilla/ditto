const { hexToRGBA, normalizeHex } = require('./color');

describe('normalizeHex()', () => {
  it.each([
    ['#0000', '00000000'],
    ['#019E', '001199EE'],
    ['#2bbbad', '2BBBADFF'],
    ['#80A', '8800AAFF'],
    ['#ABC9', 'AABBCC99'],
    ['#DB7093F9', 'DB7093F9'],
    ['#FFF', 'FFFFFFFF'],

    ['0000', '00000000'],
    ['019E', '001199EE'],
    ['2bbbad', '2BBBADFF'],
    ['80A', '8800AAFF'],
    ['ABC9', 'AABBCC99'],
    ['DB7093F9', 'DB7093F9'],
    ['FFF', 'FFFFFFFF'],
  ])(`'%s' → '%s'`, (input, expected) => {
    expect(normalizeHex(input).join('')).toBe(expected);
  });

  describe('throws an error when the hex value is invalid', () => {
    it('throws when the length is invalid', () => {
      expect(() => {
        normalizeHex('AB');
      }).toThrow();

      expect(() => {
        normalizeHex('AB01010101010101');
      }).toThrow();
    });

    it('throws when the type is invalid', () => {
      expect(() => {
        normalizeHex(null);
      }).toThrow();

      expect(() => {
        normalizeHex(undefined);
      }).toThrow();
    });

    it('throws when there are invalid characters', () => {
      expect(() => {
        normalizeHex('null');
      }).toThrow();
    });
  });
});

describe('hexToRGBA()', () => {
  describe('coverts 6/8 character hex values to rgba', () => {
    it.each([
      ['#FFFFFF', { red: 1, green: 1, blue: 1, alpha: 1 }],
      ['#000000', { red: 0, green: 0, blue: 0, alpha: 1 }],
      ['#FF00FF', { red: 1, green: 0, blue: 1, alpha: 1 }],
      ['#2bbbad', { red: 0.16862745098039217, green: 0.7333333333333333, blue: 0.6784313725490196, alpha: 1 }],
      ['#DB7093', { red: 0.8588235294117647, green: 0.4392156862745098, blue: 0.5764705882352941, alpha: 1 }],
    ])('%s', (hex, rgba) => {
      expect(hexToRGBA(hex)).toEqual(rgba);
    });
  });

  describe('coverts 3/4 character hex values to rgba', () => {
    it.each([
      ['#FFF', { red: 1, green: 1, blue: 1, alpha: 1 }],
      ['#000', { red: 0, green: 0, blue: 0, alpha: 1 }],
      ['#F0F', { red: 1, green: 0, blue: 1, alpha: 1 }],
      ['#F0F8', { red: 1, green: 0, blue: 1, alpha: 0.5333333333333333 }],
      ['#2bbbad', { red: 0.16862745098039217, green: 0.7333333333333333, blue: 0.6784313725490196, alpha: 1 }],
      [
        '#2bbbad58',
        { red: 0.16862745098039217, green: 0.7333333333333333, blue: 0.6784313725490196, alpha: 0.34509803921568627 },
      ],
      ['#DB7093', { red: 0.8588235294117647, green: 0.4392156862745098, blue: 0.5764705882352941, alpha: 1 }],
    ])('%s', (hex, rgba) => {
      expect(hexToRGBA(hex)).toEqual(rgba);
    });
  });
});
