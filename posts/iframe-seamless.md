feature: iframe[seamless]
status: caution
tags: none
kind: html
polyfillurls:
moreurl: http://weblog.bocoup.com/third-party-javascript-development-future/#iframe-seamless

This attribute instructs browsers to treat the iFrame's content more like inline markup than it would otherwise. Specifically, this means:

* Hyperlinks navigate the parent context
* The parent's stylesheets cascade in (importantly, the inverse is not true)
* More "neutral" rendering, roughly equivalent to declaring: `scrolling="no" marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0"`

Because the user experience of following hyperlinks is so drastically altered in supporting browsers, use this attribute with caution.

Also see [more about implementing `iframe[seamless]`](http://weblog.bocoup.com/third-party-javascript-development-future/#iframe-seamless) responsibly on Bocoup's blog.
