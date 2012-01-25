feature: &lt;input type=color>
status: avoid
tags: polyfill gtie9
kind: html
polyfillurls: [jscolor](https://github.com/jo/JSColor), [html5widgets](http://www.useragentman.com/blog/2010/07/27/cross-browser-html5-forms-using-modernizr-webforms2-and-html5widgets/)

A color input will fall back to a plain text input if it's not supported, but excluding Opera, no desktop browser has added support for color inputs.

You should probably avoid this until it has support in WebKit, Gecko or IE.
