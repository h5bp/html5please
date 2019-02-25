feature: CORS
status: use
tags: polyfill
kind: html
polyfillurls:[flXHR](https://github.com/flensed/flXHR) (requires crossdomain.xml)

CORS, or cross-origin resource sharing, enables a few things, but most notably cross-domain AJAX. All non-IE browsers have support for CORS. IE8 introduced [XDomainRequest][], so really only IE7 needs help with cross-domain files. Consider the flXHR polyfill or you can fall back to using a [simple proxy](http://benalman.com/projects/php-simple-proxy/).

[XDomainRequest]: https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest
