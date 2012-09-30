feature: box-sizing
status: use
tags: fallback prefixes gtie7 border-box
kind: css
polyfillurls:

Supported in Chrome, IE8+, Opera, Safari 5.1+. The <a href="http://paulirish.com/2012/box-sizing-border-box-ftw/">recommended pattern</a> is `box-sizing : border-box;`, preceded by the fallbacks `-webkit-box-sizing: border-box;` for old IOS<=4 and Android<=2.3, and `-moz-box-sizing: border-box;` for firefox. You can apply it to all (`*`) elements if you like.

For IE6/7 you can optionally use the [box-sizing polyfill](https://github.com/Schepp/box-sizing-polyfill) to provide this feature in IE 6/7 (you could scope the adjustments using [IE conditionals](http://paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/) or Modernizr's <a href="http://www.modernizr.com/download/#-cssclasses-addtest-css_boxsizing">`no-box-sizing`</a>).

Besides the prefix, there are box sizing issues in Gecko/Firefox, see <a href="https://developer.mozilla.org/En/CSS/Box-sizing#Notes">notes at MDN</a>. Most notable, min-height/max-height does not work.

