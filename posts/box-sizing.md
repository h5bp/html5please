feature: box-sizing
status: use
tags: fallback prefixes gtie7 border-box
kind: css
polyfillurls:

Supported in Chrome, IE8+, Opera, Safari 5.1+. The <a href="http://paulirish.com/2012/box-sizing-border-box-ftw/">recommended pattern</a> is `box-sizing : border-box;`, preceded by the fallbacks `-webkit-box-sizing: border-box;` for old IOS<=4 and Android<=3, and `-moz-box-sizing: border-box;` for Firefox. You can apply it to all (`*`) elements if you like.

IE8 does not support `box-sizing: border-box;` with `min-width`/`max-width` and `min-height`/`max-height`. For IE6/7 you can optionally use the [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill) to provide this feature in IE 6/7 (you could scope the adjustments using [IE conditionals](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) or Modernizr's [`no-box-sizing`](http://www.modernizr.com/download/#-cssclasses-addtest-css_boxsizing)).

Besides the prefix, there were box sizing issues in Gecko/Firefox, see [notes at MDN](https://developer.mozilla.org/En/CSS/Box-sizing#Notes). For versions of Firefox before 17, `min-height` and `max-height` does not work.

