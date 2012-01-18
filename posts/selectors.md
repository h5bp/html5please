feature: selectors
status: use
tags: fallback gtie6
kind: css
polyfillurls:

Most CSS Selectors are supported from IE7 onwards, so you should be safe to use. But do note that, on browsers that do not support these selectors, a whole rule will be detected as invalid if these unsupported selectors are present. For example, in IE6 `#main, p:first-child {}` would be invalid because it is unable to understand `p:first-child`. We strongly recommend you do not try to polyfill this, but if you do need one, you can use [Selectivizr](http://selectivizr.com/).
