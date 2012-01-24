feature: IndexedDB
status: caution
tags: fallback gtie8
kind: api
polyfillurls: [IDBWrapper](https://github.com/jensarps/IDBWrapper)

IndexedDB was a volatile spec for a year, but has settled down. In addition to Chrome and Firefox, IE10 will have it; Opera and Safari have not yet committed to it.

[IDBWrapper](https://github.com/jensarps/IDBWrapper) helps smooth out the cross-browser differences. You may consider falling back to WebSQL when IndexedDB isn't available, but do keep in mind that WebSQL has been abandoned.
