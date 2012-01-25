feature: box-sizing
status: use
tags: fallback prefixes gtie7
kind: css
polyfillurls:

<a href="http://css-tricks.com/box-sizing/">`box-sizing`</a>`: border-box` may be a much more sensible default for you. You can apply it to all (`*`) elements if you like. Firefox is the only browser that requires a prefix for box-sizing. You can use it without a prefix for everything else. IE8 has this feature natively, and you can optionally use the [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill) to provide this feature in IE 6/7 (you could scope the adjustments using [IE conditionals](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) or Modernizr's <a href="http://www.modernizr.com/download/#-cssclasses-addtest-css_boxsizing">`no-box-sizing`</a>).
