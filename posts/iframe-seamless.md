feature: iframe[seamless]
status: avoid
tags: none
kind: html
polyfillurls:
moreurl: http://weblog.bocoup.com/third-party-javascript-development-future/#iframe-seamless

This attribute instructs browsers to treat the iFrame's content more like inline markup than it would otherwise. Specifically, this means:

* Hyperlinks navigate the parent context
* The parent's stylesheets cascade in (importantly, the inverse is not true)
* More "neutral" rendering, roughly equivalent to declaring: `scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"`

The user experience of following hyperlinks is drastically altered in supporting browsers.

Should be avoided because of the [lack of browser support](http://caniuse.com/#feat=iframe-seamless) (Chrome 20-26 had partial support behind a flag, though this was later removed).
