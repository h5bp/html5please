feature: geolocation
status: use
tags: fallback gtie8
kind: api 
polyfillurls: [geolocation shim](https://gist.github.com/366184), [geo-location-javascript](http://code.google.com/p/geo-location-javascript/)

[geolocation shim](https://gist.github.com/366184) uses Google's IP-GeoCoding service as a fallback. [geo-location-javascript](http://code.google.com/p/geo-location-javascript/) doesn't but has hooks into BlackBerry, WebOS, and Google Gears specific APIs. In most cases, you should just not expose Geo features in your app if the feature is not natively present.