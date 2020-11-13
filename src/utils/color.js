const VALID_HEX = /^[0-9A-F]{3,8}$/;

exports.normalizeHex = (raw) => {
  let hex = raw.replace(/#/, '').toUpperCase();

  if (!VALID_HEX.test(hex)) {
    throw new Error(`Invalid hex value '${hex}'`);
  }

  if (hex.length === 3 || hex.length === 4) {
    const [red, green, blue, alpha] = hex.split('');
    return [`${red}${red}`, `${green}${green}`, `${blue}${blue}`, alpha ? `${alpha}${alpha}` : `FF`];
  } else if (hex.length === 6 || hex.length === 8) {
    const [red, green, blue, alpha] = hex.match(/../g);
    return [red, green, blue, alpha ? alpha : `FF`];
  }

  throw new Error(`Invalid length of hex value (${raw}): ${raw.length}`);
};

exports.hexComponentToRGBAComponent = (component) => parseInt(component, 16) / 255.0;

exports.hexToRGBA = (rawHex) => {
  const [red, green, blue, alpha] = exports
    .normalizeHex(rawHex)
    .map((component) => exports.hexComponentToRGBAComponent(component));

  return {
    red,
    green,
    blue,
    alpha,
  };
};
