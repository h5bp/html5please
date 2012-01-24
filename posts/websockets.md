feature: WebSockets
status: caution
tags: polyfill 
kind: api
polyfillurls: [Socket.io](http://socket.io/), [web-socket-js](https://github.com/gimite/web-socket-js), [sockjs](https://github.com/sockjs) 


Making your app real-time is a huge boost and [Socket.io](http://socket.io/) is a Node+JavaScript framework that helps with downlevel transports for browsers lacking native WebSocket support (and supports IE6+). However be prepared to tune your AJAX polling or Comet in order to meet the needs of your app.

[web-socket-js](https://github.com/gimite/web-socket-js) is a natural polyfill for the JavaScript WebSocket API transferring data through Flash Sockets when WebSockets aren't available.

There is also the more recent [sockjs](https://github.com/sockjs) framework which can closley emulate the WebSocket API in the browser and use Node, Ruby, Erlang, or Tornado on the server. Can maintain communication through one of 8 different fallback methods if WebSockets aren't available while having no reliance on Flash or and other browser plugins.

As a word of caution, the protocol backing the Web Socket API has become an [IETF standard](http://tools.ietf.org/html/rfc6455), but Safari has not yet implemented the new version. For Safari it is recommended to either use sockjs, use web-socket-js and force Flash (if Flash is available, N/A on mobile), or disabling WebSockets on Safari for now.
