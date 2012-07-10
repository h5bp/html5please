feature: calc()
status: caution
tags: none
kind: css
polyfillurls:

Internet Explorer, Chrome and Firefox are the only supporting browsers, which makes using calc() in production tedious given the impact it can have on layout and the consequent breaking of your design on unsupported browsers. We encourage you to use it for experimentation and always use a fallback declaration, so it doesn't break browsers which don't support it.
