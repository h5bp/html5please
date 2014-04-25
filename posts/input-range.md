feature: <input type=range>
status: caution
tags: polyfill gtie9
kind: html
polyfillurls: [Input Range Polyfill](https://github.com/freqdec/fd-slider), [html5slider](https://github.com/fryn/html5slider)

A range input (AKA slider) will fall back to a plain text input if it's not supported.

You can use freqdec's [Input Range Polyfill](https://github.com/freqdec/fd-slider). Or to support Firefox <= 22, try Frank Yan's [html5slider](https://github.com/fryn/html5slider).

These polyfills aren't drop-in polyfills, and you'll need to wire them up a little, but your markup can depend on `<input type=range>` creating a slider.
