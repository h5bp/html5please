feature: calc()
status: caution
tags: none
kind: css
polyfillurls:

Internet Explorer, Chrome and Firefox are the only supporting browsers, which makes using calc() in production tedious given the impact it can have on layout and the consequent breaking of your design on unsupported browsers. We encourage you to use it for experimentation and always use a fallback declaration, so it doesn't break browsers which don't support it.

For now, `calc()` must always be used after a fallback declaration, so it doesn't break browsers which don't support it.

    width: 500px; /** older browsers **/
    width: -webkit-calc(50% - 20px); /** Chrome / Safari **/
    width: -moz-calc(50% - 20px); /** FF 4-15  **/
    width: -o-calc(50% - 20px); /** could be calc(), no idea about Opera's plans **/
    width: calc(50% - 20px); /** FF 16+, IE 9+, and future other browsers **/
