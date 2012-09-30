feature: min/max-width/height
status: use
tags: gtie6
kind: css
polyfillurls:

`min-width`, `max-height`, etc are supported everywhere as of IE7. The [min-height fast hack](http://www.dustindiaz.com/min-height-fast-hack/) has long been a reliable way of implementing min-height, but as many have sunsetted IE6 support, you likely don't need to worry about fallback anymore.

Use all you like without fallback; certainly do not use CSS expressions to mimic this behavior.