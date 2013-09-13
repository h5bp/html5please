feature: WebP
status: caution
tags:
kind: html
polyfillurls: [WebPJS](http://webpjs.appspot.com/)

WebP is an image format that's designed to be provide high quality photographic imagery through smaller filesizes than JPEG. It's supported natively in Chrome, Android, and Opera.

WebP alpha support is available in Chrome 22 (along with lossless). You can detect alpha support with a `onload`/`onerror` handlers.

For now, Modernizr detects WebP support and you can manage your own fallback to jpeg.
