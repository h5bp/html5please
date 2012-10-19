feature: CORS
status: use
tags: polyfill
kind: html
polyfillurls:[flXHR](http://flxhr.flensed.com/) (requires crossdomain.xml)

CORS, or cross-origin resource sharing, enables a few things, but most notably cross-domain AJAX. All non-IE browsers have support for CORS. IE8 introduced [XDomainRequest][], so really only IE7 needs help with cross-domain files. Consider the flXHR polyfill or you can fall back to using a [simple proxy](http://benalman.com/projects/php-simple-proxy/).
N.B.: IE8 and IE9 do not support using [CORS over HTTPS](http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx)!
[XDomainRequest]: http://msdn.microsoft.com/en-us/library/ie/cc288060(v=vs.85).aspx
