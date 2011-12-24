feature: pseudo-elements
status: use
tags: none
kind: css
polyfillurls:

Pseudo-elements are supposed to follow this syntax `::before` and `::after`. But, if you intend to support IE7+, you would have to use `:before` and `:after`. Use these to provide only additional information, so when they are unsupported they do not destroy the readability of your page. 
