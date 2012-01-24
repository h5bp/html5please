feature: WebSockets
status: caution
tags: polyfill 
kind: api
polyfillurls: [web-socket-js](https://github.com/gimite/web-socket-js)

Adding real-time functionality such as push notifications, activity streams, live-blogging, chat and realtime document collaboration to your app can give it a huge boost through increased interactivity and user engagement.

[web-socket-js](https://github.com/gimite/web-socket-js) is a natural polyfill for the JavaScript WebSocket API transferring data through Flash Sockets when WebSockets aren't available. However, be prepared to have an HTTP long-polling, HTTP Streaming or AJAX polling fallback solution for browsers that don't have Flash installed.

There are a number of frameworks that help with fallback transports (HTTP long-polling, HTTP Streaming or AJAX polling) for browsers lacking native WebSocket support. However be prepared to tune your fallback solutions in order to meet the needs of your app.

[Socket.io](http://socket.io/) is a Node+JavaScript framework with native WebSocket support and handles connection fallback (including IE6+ support).

[XSockets](http://xsockets.net/) and  is a .NET+JavaScript framework that handles fallback via Flash and Silverlight.

As a word of caution, the protocol backing the Web Socket API has become an [IETF standard](http://tools.ietf.org/html/rfc6455), but Safari has not yet implemented the new version. It is recommended forcing Flash on Safari (if Flash is available, N/A on mobile), or disabling WebSockets on Safari for now.
