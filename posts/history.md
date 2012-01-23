feature: history
status: use
tags: fallback
kind: api
polyfillurls:[History.js](https://github.com/balupton/history.js), [pjax](http://pjax.heroku.com/)

`pushState` gives you real proper URLs along with permalinks to dynamic app state. You can use it and fall back to page refreshes if you'd like. Alternatively, History.js smooths out some browser implementation differences and an and optional hashchange fallback for HTML4 browsers. PJax (pushState + ajax) is what is used by Github for their fallback solution.
