feature: form validation
status: use
tags: polyfill, gtie9
kind: html
polyfillurls: [hyperform](https://hyperform.js.org/)

HTML5 has baked in clientside form validation, and polyfills can enable this for legacy browsers as well. Using the defined HTML5 API for constraint validation may be a more maintainable direction than using a jQuery Validation plugin, depending on your team. When detecting this feature, be aware of Safari's half baked support. It does support form validation, but won't highlight invalid fields or present error messages.
