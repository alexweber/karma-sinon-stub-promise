# karma-sinon-stub-promise

> A Karma plugin for sinon-stub-promise

[![Dependency Status](https://david-dm.org/alexweber/karma-sinon-stub-promise.svg)](https://david-dm.org/alexweber/karma-sinon-stub-promise) [![devDependency Status](https://david-dm.org/alexweber/karma-sinon-stub-promise/dev-status.svg)](https://david-dm.org/alexweber/karma-sinon-stub-promise#info=devDependencies)

## Installation

```
npm install karma-sinon-stub-promise --save-dev
```

## Requirements

This plugin has two peerDependencies with * requirement versions:

- [Sinon](http://sinonjs.org/)
- [sinon-stub-promise](https://github.com/substantial/sinon-stub-promise)

## Usage

Add `sinon-stub-promise` to the `frameworks` array in your Karma configuration:

```js
module.exports = function(config) {
  'use strict';
  config.set({
    frameworks: ['mocha', 'sinon-stub-promise', 'sinon-chai', 'chai'],
    plugins: [ ... , 'karma-sinon-stub-promise']
    #...
  });
}
```

Keep in mind that, since Karma loads its frameworks in reverse and `sinon-stub-promise` depends on `sinon-chai`, you should declare it accordingly as done above.

## Contributing

If you like this/find it useful/find a bug please open an [issue](https://github.com/alexweber/karma-sinon-stub-promise/issues) and, better yet, submit a Pull Request! ☺ Any and all help appreciated, thanks!

---

[No rights reserved](http://unlicense.org/). Made with ♥ by [Alex Weber](https://twitter.com/alexweber15)
