feature: border-image
status: use
tags: fallback prefixes
kind: css
polyfillurls:

Make sure to use all the right prefixes (`-o-`, `-webkit`, `-ms-`, `-moz-`); additionally, [border-image.com](http://border-image.com/) may help. You should let this fallback to either a normal solid border or no border at all (depending on whether a border is essential for readability). We recommend you avoid polyfills, but [CSS3Pie](http://css3pie.com) is a polyfill you should use if you are forced into such a situation. 
