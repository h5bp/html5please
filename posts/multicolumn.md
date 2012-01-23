feature: multicolumn
status: use
tags: prefixes gtie9
kind: css
polyfillurls:

Internet Explorer, and Opera support CSS Multiple Column without vendor prefixes, so you only need prefixed versions for `-webkit` and `-moz`. A further note, features like `column-break-after`, `column-break-before`, and `column-break-inside` which are necessary for advanced typography a are webkit-only right now. We recommend you do not polyfill this and let it fall back to single column text.
