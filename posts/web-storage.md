feature: web-storage
status: use
tags: gtie7, polyfill
kind: api
polyfillurls:[storage polyfill](https://gist.github.com/350433),
[sessionstorage](http://code.google.com/p/sessionstorage/),
[amplify.js](http://amplifyjs.com/), [realStorage](http://code.google.com/p/realstorage/), [YUI3 CacheOffline](http://yuilibrary.com/yui/docs/cache/#offline)

Local and session storage are a great way to store data without resorting to cookies. Some things to remember are: this is a simple key/value store, so if you want to store complex data use JSON.parse and JSON.stringify around the data. There is also no way to know if you exceeded the storage cross-browser, so wrap your store commands in try/catch. Up to 5MB is safe to use.