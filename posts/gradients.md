feature: gradients
status: use
tags: fallback prefixes gtie8
kind: css
polyfillurls:

We strongly recommend you use all the prefixes (`-o-`, `-webkit-`, `-ms-`, `-moz-`) when you provide gradients as image values (`background` or `border-image`). Do provide a fallback color if you are using this as a value for `background` so browsers that do not support the gradients can render a solid background color. 

We also suggest you drop old WebKit syntax and only use the [newer syntax](https://developer.mozilla.org/en/CSS/-moz-linear-gradient) for gradient values and [not the latest one](http://www.broken-links.com/2012/01/11/the-new-and-hopefully-final-linear-gradient-syntax/) (yet) until [the specification](http://www.w3.org/TR/css3-images/) hits Candidate Recommendation. 
