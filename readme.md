# why?

Useful for whitelisting modules local to the current package in `.babelrc` or in your webpack loader config.

# what's it do?

Give it the path to the root of your package (`__dirname works well when run from the root of the package), and it will give you a regular expression that matches modules that are contained by that directory and are not in `node_modules`.

# example usage

```js
const localModuleRegexMaker = require('local-module-regex');
const assert = require('assert');
assert(!localModuleRegexMaker('/a/b').test('/a/b/node_modules/foo'));
assert(localModuleRegexMaker('/a/b').test('/a/b/a'));
assert(!localModuleRegexMaker('/a.e/b').test('/are/b'));
assert(localModuleRegexMaker('/a/b').test('/a/b/node_modules'));
assert(!localModuleRegexMaker('/a/b').test('/a/b/node_modules/foo'));
assert(localModuleRegexMaker('/a/node_modules/b').test('/a/node_modules/b'));
assert(localModuleRegexMaker('/a/node_modules/b').test('/a/node_modules/b/'));
assert(!localModuleRegexMaker('/a/node_modules/b').test('/a/node_modules/b/node_modules/asdf'));
```
