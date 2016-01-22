feature: <input type=number>
status: use
tags: polyfill fallback
kind: html
polyfillurls: [Number polyfill](https://github.com/jonstipe/number-polyfill)

A number input will fallback to a plain text input if it's not supported.

It is supported by all major browsers. Jonathan Stipe's [Number polyfill](https://github.com/jonstipe/number-polyfill) doesn't need any additional code changes but does require jQuery and CSS to style buttons.

Safari on iOS and the Browser on Android 4.0 (Ice Cream Sandwich) do show number input, but do not use "step", "min" or "max" attributes and neither show increment/decrement buttons.
