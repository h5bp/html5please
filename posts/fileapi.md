feature: File API
status: caution
tags: prefixes polyfill
kind: api
polyfillurls: [FileReader](https://github.com/Jahdrien/FileReader)

Using the File API added to the DOM in HTML5, it's now possible for web content to ask the user to select local files.

FileReader pairs very well with Drag n Drop to allow for drag 'n drop file uploads, and if neither of those features are present, the fallback of providing an `<input type=file>` is rather easy.
Supported in Chrome, Firefox, Opera. Safari is currently missing FileReader support.

[FileReader](https://github.com/Jahdrien/FileReader) provides useful fallback, based on Flash, jQuery and jQuery UI.