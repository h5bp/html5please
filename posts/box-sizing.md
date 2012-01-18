feature: box-sizing
status: use
tags: fallback prefixes gtie8
kind: css
polyfillurls:

Firefox is the only browser that requires a prefix for box-sizing. You can use it without a prefix for everything else. [Box Sizing Polyfill](https://github.com/Schepp/box-sizing-polyfill) provides this feature in IE 6 and 7 (you could scope the adjustments using [IE conditionals](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) or Modernizr's `no-box-sizing`).
