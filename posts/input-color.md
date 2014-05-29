feature: <input type=color>
status: avoid
tags: polyfill gtie9
kind: html
polyfillurls: [Spectrum](https://github.com/bgrins/spectrum)

A color input will fall back to a plain text input if it's not supported. So far Chrome, Firefox and Opera support this.

You should probably avoid this until it has support in WebKit or IE.
