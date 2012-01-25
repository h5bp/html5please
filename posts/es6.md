feature: ECMAScript 6
status: avoid
kind: js

ECMAScript version 6 is the upcoming version of JavaScript that brings new features and heavy syntax changes. Currently only Chrome(17+) and Firefox support a highly experimental subset of ES6 features. 

There is a [ES6-shim](https://github.com/paulmillr/es6-shim) that attempts to shim a subset of ES6 however this subset is quite small, see the [ES6 shim status](https://gist.github.com/1665192) for more details

Since ES6 brings new syntax to the language the best way to handle cross browser compliance is using a ES6 to ES3 compiler. However although there are a few projects in progress, none are ready to use.
