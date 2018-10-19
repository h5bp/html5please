feature: box-shadow
status: caution
tags: prefixes
kind: css
polyfillurls:

Polyfills are unnecessary for box-shadow. They are too costly and slow down page load. Users without a modern browser will not see a shadow, but aren't checking your site in multiple browsers anyhow.

Box shadows can also be applied safely without prefixes.
