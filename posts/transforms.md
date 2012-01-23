feature: transforms
status: use
tags: fallback prefixes
kind: css
polyfillurls:

Make sure you use all the right prefixes (`-o-`, `-webkit-`, `-ms-`, `-moz-`). If your transforms destroy the readability of your site on browsers that do not support them, use Modernizr's `no-csstransforms` class to adjust the design so that the text remains readable. In the unlikely event of you needing a polyfill for unsupported browsers, use [Transformie](https://github.com/pbakaus/transformie) or [CSSSandpaper](http://www.useragentman.com/blog/csssandpaper-a-css3-javascript-library/).
