feature: CORS
status: use
tags: polyfill
kind: html
polyfillurls:[postmessage-proxied-xhr](https://github.com/toolness/postmessage-proxied-xhr/#readme), [flXHR](http://flxhr.flensed.com/) (requires crossdomain.xml), [pmxdr](https://github.com/eligrey/pmxdr) (requires host installed)

CORS, or cross-origin resource sharing, enables a few things, but most notably cross-domain AJAX. IE8 introduced [XDomainRequest][], so really only IE7 needs help with cross-domain files. Consider the polyfills below or you can fall back to using a [simple proxy](http://benalman.com/projects/php-simple-proxy/).

[XDomainRequest]: http://msdn.microsoft.com/en-us/library/ie/cc288060(v=vs.85).aspx
