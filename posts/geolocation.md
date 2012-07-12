feature: geolocation
status: use
tags: fallback gtie8
kind: api 
polyfillurls: [geo-location-javascript](http://code.google.com/p/geo-location-javascript/)

[geo-location-javascript](http://code.google.com/p/geo-location-javascript/) has hooks into BlackBerry, WebOS, and Google Gears specific APIs. In most cases, you should just not expose Geo features in your app if the feature is not natively present.