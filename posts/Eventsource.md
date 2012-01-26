feature: EventSource
status: use
tags: fallback
kind: api
urls:[WHATWG](http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#the-eventsource-interface)
polyfillurls:[EventSource.js](https://github.com/remy/polyfills/blob/master/EventSource.js), [jQuery.eventsource](https://github.com/rwldrn/jquery.eventsource)

[Server-Sent Events](http://html5doctor.com/server-sent-events/) are real-time events emitted by the server and received by the browser. EventSource.js provides a base fallback and is not dependent on jQuery.
