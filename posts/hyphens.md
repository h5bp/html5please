feature: hyphens
status: use
tags: none prefixes
kind: css
polyfillurls:

[CSS Text Level 3](https://drafts.csswg.org/css-text-3/#hyphenation) allows you to tell the browser to break words using hyphens. Read about how to effectively use `hyphens:auto` and `word-break` in [Word wrapping/hyphenation using CSS](http://blog.kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/).

Hyphenation is supported by Firefox 43+ unprefixed, Edge and IE10+ with the `-ms-` prefix, Firefox 6–42 with the `-moz-` prefix, and Safari 5.1+ with the `-webkit-` prefix.  Edge and IE10+ also support finer grained control via the [CSS Text Level 4](https://drafts.csswg.org/css-text-4/#hyphenation) hyphenation properties.

As there won't be any noticeable effects on browsers which don't support the feature, we recommend that you use it without any polyfills or fallbacks, but be careful when using justified text as it may create rivers of whitespace. [CSS Hyphenator](https://github.com/mnater/hyphenator) is a polyfill that works on browsers that support the soft hyphen. [Modernizr has good support](https://github.com/Modernizr/Modernizr/issues/312) for hyphenation detection. It'd also be wise to read [The Current State of Hyphenation on the Web
](http://davidnewton.ca/the-current-state-of-hyphenation-on-the-web).
