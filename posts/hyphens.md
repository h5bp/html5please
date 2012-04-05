feature: hyphens
status: use
tags: none prefixes
kind: css
polyfillurls:

[CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#hyphenation) allows you to tell the browser to break words using hyphens. Read about how to effectively use `hyphens:auto` and `word-break` in [Word wrapping/hyphenation using CSS](http://blog.kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/). 

As there won't by any noticable effects on browsers which don't support the feature, we recommend that you use it without any polyfills or fallbacks. [CSS Hyphenator](http://code.google.com/p/hyphenator/) is a polyfill that works on browsers that support the soft hyphen. [Modernizr has good support](https://github.com/Modernizr/Modernizr/issues/312) for hyphentation detection. 
