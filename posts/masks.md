feature: masks
status: caution
tags: none
kind: css
polyfillurls:

For several years, CSS Masks were a WebKit exclusive. However, they have recently been resuscitated, with the W3C recently publishing a new [Masks Working Draft](https://www.w3.org/TR/css-masking/). [SVG-based fallbacks](http://thenittygritty.co/css-masking) do not work in IE 10, so it is premature to use this feature in production.

If you do use it, be sure to include the `-webkit-` prefix.
