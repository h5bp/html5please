feature: calc()
status: avoid
tags: none
kind: css
polyfillurls:

Internet Explorer, Firefox and the Chrome Nightly Builds are the only supporting browsers, which makes using calc() in production tedious given the impact it can have on layout and the consequent breaking of your design on unsupported browsers. We encourage you to use it for experimentation, but to avoid it in production.