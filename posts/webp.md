feature: WebP
status: caution
tags:
kind: html
polyfillurls:

WebP is an image format that's designed to be provide high quality photographic imagery through smaller filesizes than JPEG. It's supported natively in Chrome, Android, and Opera. Through the [weppy](https://github.com/antimatter15/weppy) polyfill you can pick up Firefox support.

WebP alpha support is available in Chrome 22 (along with lossless). You can detect alpha support with a `onload`/`onerror` handlers, though there is [discussion](https://github.com/antimatter15/weppy/issues/2) about giving weppy a firstclass support for alpha+fallback.

For now, Modernizr detects WebP support and you can manage your own fallback to jpeg.
