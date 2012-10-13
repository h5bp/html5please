feature: JSON
status: use
tags: gtie7 polyfill
kind: js
polyfillurls: [json2.js](https://github.com/douglascrockford/JSON-js), [JSON 3](http://bestiejs.github.com/json3/)

[JSON](http://json.org/) is a language-independent data interchange format based on a loose subset of the JavaScript grammar. Originally popularized by [Douglas Crockford](http://www.crockford.com/), the format was standardized in the [fifth edition](http://es5.github.com/) of the ECMAScript specification.

[JSON 3](http://bestiejs.github.com/json3/) is a polyfill compatible with nearly all JavaScript platforms. It is a drop-in replacement for [JSON 2](https://github.com/douglascrockford/JSON-js) that uses feature tests to detect broken and incomplete native JSON implementations, supports [asynchronous module loaders](https://github.com/amdjs/amdjs-api/wiki) and [`has`](https://github.com/phiggins42/has.js/)-aware optimizers, and is built to specification standards.

[JSON 2](https://github.com/douglascrockford/JSON-js) is an older, alternative polyfill by Douglas Crockford.
