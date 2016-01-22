feature: gradients
status: use
tags: fallback prefixes gtie8
kind: css
polyfillurls:

Do provide a fallback color if you are using this as a value for `background` so browsers that do not support the gradients can render a solid background color.

We also suggest you drop old WebKit syntax and only use the [final syntax](https://developer.mozilla.org/en/CSS/-moz-linear-gradient) for gradient values. If you need deeper support you should use `-moz-` and `-webkit-` prefixes with the previous syntax (no `to` keyword and flipped angles).

