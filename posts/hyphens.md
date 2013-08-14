feature: hyphens
status: use
tags: none prefixes
kind: css
polyfillurls:

[CSS Text Level 3](http://dev.w3.org/csswg/css3-text/#hyphenation) allows you to tell the browser to break words using hyphens. Read about how to effectively use `hyphens:auto` and `word-break` in [Word wrapping/hyphenation using CSS](http://blog.kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/).

As there won't be any noticable effects on browsers which don't support the feature, we recommend that you use it without any polyfills or fallbacks. [CSS Hyphenator](http://code.google.com/p/hyphenator/) is a polyfill that works on browsers that support the soft hyphen. [Modernizr has good support](https://github.com/Modernizr/Modernizr/issues/312) for hyphenation detection. It'd also be wise to read [The Current State of Hyphenation on the Web
](http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web).
