feature: calc()
status: use
tags: fallback
kind: css
polyfillurls:

All the modern browsers except Android's native browser support `calc()` which makes it easier to adopt. But do note that it can have a big impact on the layout and the consequent breaking of your design on unsupported browsers. 

You should use it with a fallback declaration, so it doesn't break browsers which don't support it.

    width: 500px; /** older browsers **/
    width: -webkit-calc(50% - 20px); /** Safari 6, Chrome 19-25 **/
    width: -moz-calc(50% - 20px); /** FF 4-15  **/
    width: calc(50% - 20px); /** FF 16+, IE 9+, Opera 15, Chrome 26+, Safari 7 and future other browsers **/
