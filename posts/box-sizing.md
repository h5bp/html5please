feature: box-sizing
status: use
tags: fallback prefixes gtie7 border-box
kind: css
polyfillurls:

<a href="http://paulirish.com/2012/box-sizing-border-box-ftw/">`box-sizing : border-box`</a> may be a much more sensible default for you. You can apply it to all (`*`) elements if you like. Firefox is the only desktop browser that requires a prefix (`-moz-`) for box-sizing. Both IOS and Android requires prefix `-webkit-`. You can use it without a prefix for everything else. IE8, Chrome 10 and Opera 7 have this feature natively, and you can optionally use the [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill) to provide this feature in IE 6/7 (you could scope the adjustments using [IE conditionals](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) or Modernizr's <a href="http://www.modernizr.com/download/#-cssclasses-addtest-css_boxsizing">`no-box-sizing`</a>).

There are still issues regarding max-height/min-height and box sizing in Gecko/Firefox, see <a href="https://developer.mozilla.org/En/CSS/Box-sizing#Notes">notes at MDN</a>.