feature: Web Workers
status: use
tags: fallback gtie9
kind: api
polyfillurls:

Web Workers can parallelize computationally heavy operations, freeing up the UI thread to respond to user input.

For browsers that do not support web workers, depending on your [use case](http://stackoverflow.com/questions/2773682/what-are-the-use-cases-for-web-workers/2774022#2774022), you may choose not to offer the feature that web workers provide or to [chunk it up](http://www.nczonline.net/blog/2009/01/13/speed-up-your-javascript-part-1/) and put it on the UI thread.
