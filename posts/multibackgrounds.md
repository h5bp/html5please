feature: multiple backgrounds
status: use
tags: fallback gtie8
kind: css
polyfillurls:

Multiple backgrounds when unsupported [are ignored completely](http://snook.ca/archives/html_and_css/multiple-bg-css-gradients). If you can make do with a simple background color, make sure to declare `background-color: <color>` before you start using multiple backgrounds or you can also set an image as a background with `background-image` and override it with a second  background declaration. We strongly recommend you don't polyfill this.
