feature: <input type=number>
status: caution
tags: polyfill gtie9
kind: html
polyfillurls: [Number polyfill](https://github.com/jonstipe/number-polyfill)

A number input will fallback to a plain text input if it's not supported.

So far, Chrome, Safari and Opera support it. Safari on iOS and Android 4.0 do show number input, but do not use "step", "min" or "max" attributes and neither show increment/decrement buttons.

The polyfill by jonstipe doesn't need any additional code changes and does provide all functionality for browsers that do no support number type.
