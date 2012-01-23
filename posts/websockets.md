feature: websockets
status: caution
tags: polyfill 
kind: api
polyfillurls: [Socket.io](http://socket.io/), [web-socket-js](https://github.com/gimite/web-socket-js)

Making your app real-time is a huge boost and [Socket.io](http://socket.io/) is a Node+Javascript framework that helps with downlevel transports for browsers lacking native websocket support (and supports IE6+). However be prepared to tune your AJAX polling or Comet in order to meet the needs of your app.

[web-socket-js](https://github.com/gimite/web-socket-js) is a natural polyfill for the Javascript WebSocket API transferring data through Flash Sockets when WebSockets aren't available.

As a word of caution, the protocol backing the Web Socket API has become an [IETF standard](http://tools.ietf.org/html/rfc6455), but Safari has not yet implemented the new version.  It is recommended forcing Flash on Safari (or disabling WebSockets on Safari) for now.
