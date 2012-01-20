feature: websockets
status: caution
tags: none 
kind: api
polyfillurls: [Socket.io](http://socket.io/)

Making your app real-time is a huge boost and [Socket.io](http://socket.io/) helps with downlevel transports for browsers lacking native websocket support (and supports IE6+). However be prepared to tune your AJAX polling or Comet in order to meet the needs of your app.