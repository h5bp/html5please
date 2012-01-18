feature: transitions
status: use
tags: fallback prefixes
kind: css
polyfillurls:

Note that you need to use all the usual prefixes to make this work in all browsers (`-o-`, `-webkit`, `-moz-`, `-ms-`).If there is any critical interaction that requires transitions to be present, we recommend you provide an alternative experience for users on browsers that do not support this feature by using feature detection. 
