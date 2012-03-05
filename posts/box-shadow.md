feature: box-shadow
status: caution
tags: prefixes
kind: css
polyfillurls:

`box-shadow` is safe to use most of the time, except when you are applying it on a large area as that may cause significant performance impact when interacting with the page (on scroll and hovers, but also transitions and animations). 

Polyfills are unnecessary for box-shadow. They are too costly and slow down page load. Users without a modern browser will not see a shadow, but aren't checking your site in multiple browsers anyhow.

Box shadows can also be applied safely without prefixes. 
