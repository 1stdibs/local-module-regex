var path = require('path');
module.exports = function (parentDir) {
    return new RegExp('^' + escape(parentDir) + '$|' + escape(parentDir + path.sep) + '(?!node_modules' + escape(path.sep) + ')');
};
