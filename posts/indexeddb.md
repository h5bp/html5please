feature: IndexedDB
status: caution
tags: fallback gtie8
kind: api
polyfillurls: [IDBWrapper](https://github.com/jensarps/IDBWrapper), [IndexedDB Polyfill](https://nparashuram.com/IndexedDB)

IndexedDB was a volatile spec for a year, but has settled down. Chrome, Firefox, Opera and IE10 have shipped it. Safari started to support it in iOS8.

The [IndexedDB Polyfill](https://nparashuram.com/IndexedDB) is a polyfill for the IndexedDB APIs over WebSql. This enables IndexedDB to work on browsers that support WebSql.
[IDBWrapper](https://github.com/jensarps/IDBWrapper) helps smooth out the cross-browser differences. You may consider falling back to WebSQL when IndexedDB isn't available, but do keep in mind that WebSQL has been abandoned.

