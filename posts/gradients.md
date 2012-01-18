feature: gradients
status: use
tags: fallback prefixes gtie8
kind: css
polyfillurls:

We strongly recommend you use all the prefixes ((`-o-`, `-webkit`, `-ms-`, `-moz-`)) when you provide gradients as image values (`background` or `border-image`). Do provide a fallback color if you are using this as a value for `background` so browsers that do not support the gradients can render a solid background color. 

We also suggest you drop old webkit syntax and only use the [latest syntax](http://www.broken-links.com/2012/01/11/the-new-and-hopefully-final-linear-gradient-syntax/) for gradient values. 
