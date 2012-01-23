feature: websockets
status: caution
tags: polyfill 
kind: api
polyfillurls: [Socket.io](http://socket.io/)

Making your app real-time is a huge boost and [Socket.io](http://socket.io/) helps with downlevel transports for browsers lacking native websocket support (and supports IE6+). However be prepared to tune your AJAX polling or Comet in order to meet the needs of your app.

As a word of caution, the protocol backing the Web Socket API has changed several times in the past year, but should have matured enough to not introduce any more breaking changes.
