const localModuleRegexMaker = require('..');
const assert = require('assert');
describe('local module regex', function () {
    it('should work', function () {
        assert(!localModuleRegexMaker("/a/b").test('/a/b/node_modules/foo'));
        assert(localModuleRegexMaker("/a/b").test('/a/b/a'));
        assert(!localModuleRegexMaker("/a.e/b").test('/are/b'));
        assert(localModuleRegexMaker("/a/b").test('/a/b/node_modules'));
        assert(!localModuleRegexMaker("/a/b").test('/a/b/node_modules/foo'));
        assert(localModuleRegexMaker("/a/node_modules/b").test('/a/node_modules/b'));
        assert(localModuleRegexMaker("/a/node_modules/b").test('/a/node_modules/b/'));
        assert(!localModuleRegexMaker("/a/node_modules/b").test('/a/node_modules/b/node_modules/asdf'));
    });
});
