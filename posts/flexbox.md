feature: flexbox
status: avoid
tags: none flexible
kind: css
polyfillurls:

Unfortunately, [older versions of this spec](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) have been implemented in Gecko, WebKit and Trident. A tutorial covering that spec is [on HTML5 Rocks](http://www.html5rocks.com/en/tutorials/flexbox/quick/).

But [the spec](http://dev.w3.org/csswg/css3-flexbox/) has changed significantly. Stephan Hay has <a href="http://www.the-haystack.com/2012/01/04/learn-you-a-flexbox/">written a guide on the new flexbox implementation</a>. However, since this revised spec, the spec underwent more naming changes, which have started to debut in Chrome 22. The spec is now at last call and is considered stable so we expect no more breaking changes.

We recommend you avoid using this until the TR version of the spec finds wide-spread implementation.
