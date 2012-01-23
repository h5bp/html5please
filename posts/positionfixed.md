feature: position:fixed
status: use
tags: none
kind: css
polyfillurls:

Fixed positioning wasn't in IE6, but is fine in IE7 and everywhere else ([except mobile, which is described at length here](http://bradfrostweb.com/blog/mobile/fixed-position/)). 

Use fixed positioning all you like, but you may want to check its behavior in mobile browsers afterward. There is a [messy feature detect](https://github.com/Modernizr/Modernizr/issues/167#issuecomment-2155861) if you'd like it.
