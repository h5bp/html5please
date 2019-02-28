feature: <input type=range>
status: use
tags: gtie9
kind: html
polyfillurls: [Input Range Polyfill](https://github.com/freqdec/fd-slider), [rangeslider.js](http://rangeslider.js.org/)

A range input (AKA slider) is supported by all evergreen browsers and Internet Explorer 11. Also it will fall back to a plain text input if it's not supported.

If you have to support Internet Explorer 9 and below you can use freqdec's [Input Range Polyfill](https://github.com/freqdec/fd-slider), [rangeslider.js](http://rangeslider.js.org/).

These polyfills aren't drop-in polyfills, and you'll need to wire them up a little, but your markup can depend on `<input type=range>` creating a slider.
