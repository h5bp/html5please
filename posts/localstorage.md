feature: localStorage
status: use
tags: gtie7 fallback
kind: api
polyfillurls:[Remy’s storage polyfill](https://gist.github.com/350433), [sessionstorage](http://code.google.com/p/sessionstorage/)

Local and session storage are a great way to store data without resorting to cookies. IE8 supported `localStorage` and `sessionStorage` so you may not need a polyfill. If you do, Remy's is a piece of cake to implement and use.

This is a simple key/value store, so if you want to store complex data use `JSON.parse(str)` and `JSON.stringify(obj)` on your way in and out. There is also no way to know if you exceeded the storage cross-browser, so wrap your store commands in try/catch. Be prepared for browsers to limit the space available to zero bytes: Most offer 5MB (or about 2.5 million characters), but e.g. Safari Mobile will not let you write to localStorage.

As part of keeping things simple, `localStorage` has a synchronous API that runs on the main UI thread in browsers; as a consequence of that, a [race condition](http://html5doctor.com/storing-data-the-simple-html5-way-and-a-few-tricks-you-might-not-have-known/#comment-17296) can occur if a user has the same site open in multiple windows or tabs running as separate processes. For many applications, that’s never really a problem in practice. But it can cause data corruption—so applications where it’s important to try to ensure that absolutely no data corruption can occur should instead use a more robust storage mechanism such as `IndexedDB`.

Due to the shortcomings of `localStorage`, there are calls [to stop advocating for and building examples that use it](http://paul.kinlan.me/we-need-to-kill-off-the-localstorage-api).
