var path = require('path');
var er = require('escape-string-regexp');
module.exports = function (parentDir) {
    return new RegExp('^' + er(parentDir) + '$|' + er(parentDir + path.sep) + '(?!node_modules' + er(path.sep) + ')');
};
