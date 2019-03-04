feature: <datalist>
status: use
tags: polyfill gtie9 nomobile
kind: html
polyfillurls: [datalist-polyfill](https://github.com/mfranzke/datalist-polyfill), [Relevant Dropdowns](https://css-tricks.com/relevant-dropdowns-polyfill-for-datalist/)

[`<datalist>`](https://www.jotform.com/blog/html5-datalists-what-you-need-to-know-78024/) enables autocomplete combo boxes.

It can be polyfilled (for IE 9 and Safari) with the scripts below, though they have [varying levels](https://github.com/h5bp/html5please/issues/18) of support for the full feature. You can also use a [graceful fallback](https://adactio.com/journal/4272/) if you choose not to polyfill.

Please make sure to check [caniuse](https://caniuse.com/#feat=datalist) regarding partial support even in modern browsers.
