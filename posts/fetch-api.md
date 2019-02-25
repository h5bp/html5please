feature: Fetch API
status: use
tags: polyfill
kind: api
polyfillurls: [fetch](https://github.com/github/fetch)
moreurl: https://developers.google.com/web/updates/2015/03/introduction-to-fetch

The [Fetch API](https://hacks.mozilla.org/2015/03/this-api-is-so-fetching) is a replacement for the [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) object. It's relatively new and the [browser support](https://caniuse.com/#feat=fetch) isn't great at the moment, but GitHub provides a nice polyfill that supports IE9+.

The API is accessible via the global `window.fetch` function.
