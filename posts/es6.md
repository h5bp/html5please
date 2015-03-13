feature: ECMAScript 6
status: polyfill
tags: es6
kind: js
polyfillurls: [Babel](https://babeljs.io/), [Traceur](https://github.com/google/traceur-compiler), [ES6-shim](https://github.com/paulmillr/es6-shim)
moreurl: http://www.2ality.com/2013/07/es6-modules.html

ECMAScript version 6 is the upcoming version of JavaScript that brings new features and heavy syntax changes. 

Currently neither browsers fully support ES6 features.
https://kangax.github.io/compat-table/es6/

There is a [ES6-shim](https://github.com/paulmillr/es6-shim) that attempts to shim a subset of ES6 however this subset is quite small, see the [ES6 shim status](https://gist.github.com/1665192) for more details.

Since ES6 brings new syntax to the language the best way to handle cross browser compliance is using a ES6 to ES5 compiler like [Babel](https://babeljs.io/) or [traceur](https://github.com/google/traceur-compiler).
