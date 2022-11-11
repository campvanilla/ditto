const util = require('util');
const fs = require('fs');

exports.readFile = util.promisify(fs.readFile);
exports.writeFile = util.promisify(fs.writeFile);
exports.readdir = util.promisify(fs.readdir);
exports.stat = util.promisify(fs.stat);

exports.safeReadFile = async (...args) => {
  try {
    const file = await exports.readFile(...args);
    return file;
  } catch (_err) {
    return null;
  }
};
