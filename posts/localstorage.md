feature: localStorage
status: use
tags: gtie7 polyfill
kind: api
polyfillurls:[Remy's storage polyfill](https://gist.github.com/350433), [sessionstorage](http://code.google.com/p/sessionstorage/)

Local and session storage are a great way to store data without resorting to cookies. IE8 supported `localStorage` and `sessionStorage` so you may not need a polyfill. If you do, Remy's is a piece of cake to implement and use.

This is a simple key/value store, so if you want to store complex data use `JSON.parse(str)` and `JSON.stringify(obj)` on your way in and out. There is also no way to know if you exceeded the storage cross-browser, so wrap your store commands in try/catch. Up to 2.5MB is safe to use.
