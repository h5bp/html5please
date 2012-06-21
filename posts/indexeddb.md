feature: IndexedDB
status: caution
tags: fallback gtie8
kind: api
polyfillurls: [IDBWrapper](https://github.com/jensarps/IDBWrapper), [IndexedDB Polyfill](http://nparashuram.com/IndexedDBShim)

IndexedDB was a volatile spec for a year, but has settled down. In addition to Chrome and Firefox, IE10 will have it; Opera has not yet implemented it and Safari has not yet committed to it.

[IDBWrapper](https://github.com/jensarps/IDBWrapper) helps smooth out the cross-browser differences. You may consider falling back to WebSQL when IndexedDB isn't available, but do keep in mind that WebSQL has been abandoned.

The [IndexedDB Polyfill](http://nparashuram.com/IndexedDBShim) is a polyfill for the IndexedDB APIs over WebSql. This enables IndexedDB to work on browsers like Opera and Safari that support WebSql. 

Some IndexedDB libraries that also abstract differences between implementations in Chrome and Firefox are 
* [Jquery IndexedDB](http://nparashuram.com/jquery-indexeddb)
* [LINQ for IndexedDB](http://linq2indexeddb.codeplex.com/)
* [PouchDB](http://pouchdb.com/)
* [DB.js](http://aaronpowell.github.com/db.js/)