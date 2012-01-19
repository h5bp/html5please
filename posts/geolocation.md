feature: geolocation
status: use
tags: fallback gtie8
kind: api 
polyfillurls: [Paul's geolocation Shim](https://gist.github.com/366184), [geo-location-javascript](http://code.google.com/p/geo-location-javascript/)

[Paul's shim](https://gist.github.com/366184) uses Google's IP-geocoding service as a fallback. [geo-location-javascript](http://code.google.com/p/geo-location-javascript/) doesn't but has hooks into Blackberry, WebOS, and Google Gears specific APIs. In most cases, you should just not expose geo features in your app if the feature is not natively present.