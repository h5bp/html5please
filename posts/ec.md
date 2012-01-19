feature: ECMAScript 5
status: use
tags: fallback gtie8 nooldmobile
kind: js
polyfillurls: [es5-shim](https://github.com/kriskowal/es5-shim/), [augment.js](http://augmentjs.com/)

ECMAScript version 5 covers a large number of feature additions to what we normally call JavaScript. Excluding IE8, [most of ES5 is supported in browsers](http://kangax.github.com/es5-compat-table/). As it introduces no new syntax, it's possible to polyfill fairly well. The below polyfills tackle most uses of these features, but [not _all_ cases](https://gist.github.com/1120592).
