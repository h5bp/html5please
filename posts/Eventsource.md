feature: EventSource (Server-Sent Events)
status: use
tags: polyfill
kind: api
polyfillurls:[EventSource polyfill](https://github.com/Yaffle/EventSource)

Server-sent events are real-time events emitted by the server and received by the browser.
The main difference to WebSockets is that server-sent events work over regular HTTP and can therefore be replicated entirely using JavaScript. 

EventSource isn’t available in any version of Internet Explorer and still under [consideration for Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/status/serversenteventseventsource/?q=EventSource).

See [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) for more details.
