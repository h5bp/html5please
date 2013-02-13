feature: calc()
status: use with fallback
tags: none
kind: css
polyfillurls:

Opera and a few mobile browsers still haven't implemented calc() and that makes it hard to use without a fallback. You could limit it's use for desktop browsers and we encourage you to use it for experimentation and always use a fallback declaration, so it doesn't break browsers which don't support it.

For now, `calc()` must always be used after a fallback declaration, so it doesn't break browsers which don't support it.

    width: 500px; /** older browsers **/
    width: -webkit-calc(50% - 20px); /** Chrome / Safari **/
    width: -moz-calc(50% - 20px); /** Mozilla Firefox **/
    width: -o-calc(50% - 20px); /** could be calc(), no idea about Opera's plans **/
    width: calc(50% - 20px); /** IE and future other browsers **/
