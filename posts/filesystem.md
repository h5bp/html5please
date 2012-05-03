feature: FileSystem API
status: caution
tags: fallback gtie8
kind: api
polyfillurls: [idb.filesystem.js](https://github.com/ebidel/idb.filesystem.js)

Filesystem API provides a method of reading and writing files to a sandboxed file system on the user's local file system.
Supported only by Chrome 18+ with webkit prefix.

[idb.filesystem.js](https://github.com/ebidel/idb.filesystem.js) Implements a polyfill using IndexedDB as its underlying storage layer. Required support for IndexDB means that it works only in Firefox and Chrome.