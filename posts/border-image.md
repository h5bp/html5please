feature: border-image
status: use
tags: fallback prefixes
kind: css
polyfillurls:

Make sure to use all the right prefixes (`-o-`, `-webkit-`, `-ms-`, `-moz-`). Additionally, [border-image.com](http://border-image.com/) may help. You should let this fall back to either a normal solid border or no border at all, depending on whether a border is essential for readability. We recommend that you avoid polyfills.
