feature: multicolumn
status: use
tags: prefixes gtie9
kind: css
polyfillurls:

Internet Explorer (10+), and Opera support CSS Multi-column Layout without vendor prefixes, so you only need prefixed versions for `-webkit-` and `-moz-`. A further note, features like `column-break-after`, `column-break-before`, and `column-break-inside` — which are necessary for advanced typography — are currently WebKit-only.

We recommend you do not polyfill this and let it fall back to single column text.
