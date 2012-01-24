feature: WebGL
status: use
tags: fallback
kind: api
polyfillurls:

There are polyfills and plugins to enable WebGL for IE, but you [probably shouldn't use them](http://blog.virtualglobebook.com/2011/10/webgl-in-internet-explorer.html). Use WebGL if it's present, else point the user to [get.webgl.org](http://get.webgl.org/).

You can also offer to the user to install [Google Chrome Frame](http://code.google.com/chrome/chromeframe/) if they just want a plugin. Nearly all WebGL demos use GCF if it's available.