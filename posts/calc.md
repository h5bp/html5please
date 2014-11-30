feature: calc()
status: use
tags: fallback
kind: css
polyfillurls:

All browsers support `calc()` unprefixed, but do note that it can have a big impact on the layout and the consequent breaking of your design on unsupported browsers.

You should use it with a fallback declaration, so it doesn't break on browsers which don't support it.

    width: 500px; /* older browsers */
    width: calc(50% - 20px);
