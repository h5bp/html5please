feature: <audio>
status: use
tags: gtie8 polyfill
kind: html
polyfillurls: [mediaelement.js](http://www.mediaelementjs.com/), [Sound Manager 2](http://www.schillmania.com/projects/soundmanager2/)

As is the case with video, you can provide your audio in multiple formats. But it’s not necessary if you only target modern browsers.
See [browser media codec support in 2018](https://www.construct.net/en/blogs/ashleys-blog-2/edge-17-supports-open-media-codecs-953), or [mdn browser compatibility tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats#Browser_compatibility).

A polyfill is only needed for IE8 and below. Sound Manager has an extensive API for further customization. [mediaelement.js](http://www.mediaelementjs.com/) offers the HTML5 media element API through Flash in the fallback case and offers uniform styling across browsers and to the Flash widget.
