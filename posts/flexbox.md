feature: flexbox
status: avoid
tags: none flexible
kind: css
polyfillurls: http://flexiejs.com/

Unfortunately, [older versions of this spec](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) have been implemented in Gecko, WebKit and Trident. A tutorial covering that spec is [on HTML5 Rocks](http://www.html5rocks.com/en/tutorials/flexbox/quick/).

But [the spec](http://dev.w3.org/csswg/css3-flexbox/) has changed significantly. (Chris Coyier has a [post on how to tell which flexbox you're looking at](http://css-tricks.com/old-flexbox-and-new-flexbox/).) Stephan Hay has <a href="http://www.the-haystack.com/2012/01/04/learn-you-a-flexbox/">written a guide on the new flexbox implementation</a>. However, since this revised spec, the spec underwent more naming changes, which debuted in Chrome 22. The spec is now at last call and is considered stable so we expect no more breaking changes.

The spec is now implemented in Opera, Chrome and Firefox. Opera has a great tutorial to learn from: [Flexbox — fast track to layout nirvana?](http://dev.opera.com/articles/view/flexbox-basics/). Additionally, the [flexbox docs at MDN](https://developer.mozilla.org/en-US/docs/CSS/Using_CSS_flexible_boxes) are great, and the [Flexbox Please!](http://demo.agektmr.com/flexbox/) tool.
