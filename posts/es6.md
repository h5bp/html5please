feature: ECMAScript 6 (and above)
status: use
tags: polyfill
kind: js
polyfillurls: [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill.html), [core-js](https://github.com/zloirock/core-js)
moreurl: https://ponyfoo.com/articles/es6

ECMAScript version 6 was a major update of JavaScript that brought new features and lots of syntactical additions.
ES6 was later renamed to ES2015 to reflect the changes in the release cycle. Since 2015 there are yearly releases with smaller feature sets.

ES6 is pretty well supported by the latest browsers.
You can check the [ES6 compatibility table](https://kangax.github.io/compat-table/es6/) for details about the latest versions.

If you have to support Internet Explorer or would like to use the latest ECMAScript features you will have to use:

- [Babel](https://babeljs.io/) as a tool to compile newer syntax to ES5
- [@babel/polyfill](https://babeljs.io/docs/en/next/babel-polyfill.html) to polyfill new built-in methods

Note:  
*@babel/polyfill* is a simple solution which wraps *core-js* and includes each and every polyfill no matter if you actually need it.
You should consider using *core-js* directly to import just the polyfills you need to receive a better performance due to smaller JavaScript bundle files.
