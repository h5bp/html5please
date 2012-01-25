feature: transitions
status: use
tags: fallback prefixes
kind: css
polyfillurls:

Most of the time, transitions just add to the experience and are not necessary for a usable experience. If there is any critical interaction that requires transitions to be present, we recommend you provide an alternative experience for users on browsers that do not support this feature by feature detecting its presence. 
Note that you need to use all the usual prefixes to make this work in all browsers (`-o-`, `-webkit-`, `-moz-`, `-ms-`).
