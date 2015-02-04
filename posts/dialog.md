feature: <dialog>
status: caution
tags: polyfill
kind: html
polyfillurls:[dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)

The `<dialog>` element can be used to create popup dialogs or modal dialogs for web applications, and is part of [HTML 5.1)](http://www.w3.org/html/wg/drafts/html/master/interactive-elements.html#the-dialog-element).
In its modal mode, it blocks all access to content behind the front-most dialog.
  
The majority of [Google's polyfill](https://github.com/GoogleChrome/dialog-polyfill) goes towards preventing the browser from gaining focus or accessing content behind the dialog.
You should consider that the preventative measures taken by the polyfill are not exhaustive, as they are not implemented natively.

Supported in Chrome 37+ and Opera 24+, [tracked](https://bugzilla.mozilla.org/show_bug.cgi?id=840640) for Firefox.
