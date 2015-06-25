feature: <picture>
status: use
tags: fallback noie
kind: html
polyfillurls: [PictureFill](http://scottjehl.github.io/picturefill/)
moreurl: http://www.html5rocks.com/en/tutorials/responsive/picture-element/

The `<picture>` element allows a designer to explicitly specify the right image to use for different scenarios, similar to using media queries but for image tag sources. The element itself is merely a container; any number of `<source>` tags inside of `<picture>` is where all the magic happens. Finally, a required `<img>` element declares the default image to use if no other conditions are met. Browsers that do not support `<picture>` will gracefully fallback to this `<img>` tag, making this safe to use.

Firefox supports `<picture>` now as of version 38, but Internet Explorer and Safari [lacks support](http://caniuse.com/#feat=picture). A [polyfill](http://scottjehl.github.io/picturefill/) is available, but it is not required.
