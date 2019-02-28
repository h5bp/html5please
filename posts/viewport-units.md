feature: Viewport units (vh, vw, vmin, vmax)
status: caution
tags: fallback gtie9
kind: css
polyfillurls:

Viewport units allow elements to be sized proportionally to the browser's viewport, providing a css replacement for sizing commonly implemented with javascript. A `vh` is 1/100th of the viewport's height, a `vw` is 1/100th of the viewport's width, and `vmin` and `vmax` are 1/100th of whichever dimension is smaller or larger, respectively.

IE9 supports `vh`, `vw`, and `vm` instead of `vmin` for box and border measurements, but won't size text with viewport units.

Safari on recent iOS versions (6 and 7) has issues with viewport units where entire page width/height is used for relative unit calculation instead of just viewport width/height as described above (and in the [specification](https://www.w3.org/TR/css3-values/#viewport-relative-lengths)). This causes
[serious issues under certain circumstances](https://github.com/scottjehl/Device-Bugs/issues/36) and severely limits the use of viewport units, particularly `vh`.

Depending on the design, it's sometimes possible to gracefully degrade viewport units with approximate fallbacks. Javascript polyfills like [vminpoly](https://github.com/saabi/vminpoly) exist, but aren't recommended on production sites.
