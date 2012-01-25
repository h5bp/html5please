feature: pointer events
status: use
tags: fallback noie
kind: css
polyfillurls:

Pointer events are available in SVG and CSS. All modern browsers support them in SVG, but IE and Opera do not support them in CSS yet. There is a [modernizr plugin](https://github.com/Modernizr/Modernizr/feature-detects/pointerevents.js) to detect support, which can be used to implement a JavaScript interceptor for elements which require pointer events to be disabled.
