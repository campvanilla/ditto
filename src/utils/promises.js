const util = require('util');
const fs = require('fs');

exports.readFile = util.promisify(fs.readFile);
exports.writeFile = util.promisify(fs.writeFile);
exports.readdir = util.promisify(fs.readdir);
exports.stat = util.promisify(fs.stat);
