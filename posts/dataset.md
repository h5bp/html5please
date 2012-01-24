feature: dataset
status: use
tags: fallback noie nooldmobile
kind: api
polyfillurls:[HTML5 dataset support](http://eligrey.com/blog/post/html-5-dataset-support)

`elem.dataset` is unsupported in Internet Explorer and older mobile browsers. Using data-* attributes will be totally fine in all browsers, but instead of using `elem.dataset.foo` just use `elem.getAttribute('data-foo')`. A polyfill is availble if you want terser syntax.
