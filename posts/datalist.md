feature: <datalist>
status: use
tags: polyfill gtie9 nomobile
kind: html
polyfillurls: [Relevant Dropdowns](http://css-tricks.com/relevant-dropdowns-polyfill-for-datalist/)

[`<datalist>`](http://developers.whatwg.org/the-button-element.html#the-datalist-element) enables autocomplete combo boxes. It can be polyfilled well with the script below, though it [doesn’t support](https://github.com/h5bp/html5please/issues/18) the full feature. You may want to use a full fledged solution like [Selectize](http://selectize.github.io/selectize.js/) instead. You can also use a [graceful fallback](http://adactio.com/journal/4272/) if you choose not to polyfill.

