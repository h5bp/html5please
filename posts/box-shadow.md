feature: box-shadow
status: caution
tags: none
kind: css
polyfillurls:

`box-shadow` is safe to use most of the time, except when you are applying it on a large area, which might cause significant performance hit when the user interacts with your page (on scroll, hover, etc). 

Polyfills are unncessary for box-shadow. They are too costly and slow down pageload. Users with a downlevel browser will not get a shadow, but aren't checking your site in multiple browsers anyhow.
