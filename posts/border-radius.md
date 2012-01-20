feature: border-radius
status: use
tags: 
kind: css
polyfillurls:

`border-radius` can be safely used without a prefix for all modern browsers, and gracefully renders rectangles when not supported. However, note that applying this to a large area and on many elements [might cause significant performance](http://perfectionkills.com/profiling-css-for-fun-and-profit-optimization-notes/) impact when scrolling or when the window is redrawn. 