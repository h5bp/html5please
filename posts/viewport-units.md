feature: Viewport units (vh, vw, vmin, vmax)
status: caution
tags: fallback gtie9
kind: css
polyfillurls:

Viewport units allow elements to be sized proportionally to the browser's viewport, providing a css replacement for sizing commonly implemented with javascript. A `vh` is 1/100th of the viewport's height, a `vw` is 1/100th of the viewport's width, and `vmin` and `vmax` are 1/100th of whichever dimension is smaller or larger, respectively.

IE9 supports `vh`, `vw`, and `vm` instead of `vmin` for box and border measurements, but won't size text with viewport units.

Depending on the design, it's sometimes possible to gracefully degrade viewport units with approximate fallbacks. Javascript polyfills like [vminpoly](https://github.com/saabi/vminpoly) exist, but aren't recommended on production sites.