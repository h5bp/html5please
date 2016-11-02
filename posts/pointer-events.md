feature: pointer events
status: use
tags: fallback gtie10
kind: css
polyfillurls:

CSS has a pointer-events property and SVG has a pointer-events attribute. All modern browsers support them in SVG and CSS.

There is a [modernizr plugin](https://github.com/Modernizr/Modernizr/blob/master/feature-detects/css/pointerevents.js) to detect support, which can be used to implement a JavaScript interceptor for elements which require pointer events to be disabled.
