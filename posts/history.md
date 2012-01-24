feature: history
status: use
tags: fallback
kind: api
polyfillurls:

The `History` API provides a way for JavaScript to change the URL displayed in the browser without reloading the page. There are several approaches to providing a fallback. The simplest is to fall back to page refreshes. Alternatively, the [History.js](https://github.com/balupton/history.js) plugin smooths out some browser implementation differences and provides an optional hashchange fallback for HTML 4 browsers. GitHub uses [pjax](http://pjax.heroku.com/) (pushState + ajax).