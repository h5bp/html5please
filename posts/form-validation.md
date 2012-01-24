feature: form validation
status: use
tags: polyfill, gtie9
kind: html
polyfillurls: [webshims](http://afarkas.github.com/webshim/demos/), [nwxforms](https://github.com/dperini/nwxforms), [H5F](https://github.com/ryanseddon/H5F)

HTML5 has baked in clientside form validation, and polyfills can enable this for legacy browsers as well. Using the defined HTML5 API for constraint validation may be a more maintainable direction than using a jQuery Validation plugin, depending on your team.
