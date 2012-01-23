feature: multiple backgrounds
status: use
tags: fallback gtie8
kind: css
polyfillurls:

Multiple backgrounds will be [completely ignored](http://snook.ca/archives/html_and_css/multiple-bg-css-gradients) when they aren't supported. If you can make do with a simple background color, make sure to declare `background-color: <color>` before you start using multiple backgrounds. Alternatively, you can also set an image as a background with `background-image` and override it with a second background declaration. We strongly recommend you don't polyfill this.
