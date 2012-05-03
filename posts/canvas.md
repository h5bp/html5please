feature: <canvas>
status: use
tags: gtie8 polyfill
kind: html
polyfillurls: [FlashCanvas](http://flashcanvas.net/), [ExplorerCanvas](http://code.google.com/p/explorercanvas/)

`canvas` is definitely good to go for modern browsers. If you want to support Internet Explorer 8 and below, ExplorerCanvas and FlashCanvas can be helpful in providing support for most `canvas` features. However, due to the complex nature of native `canvas` implementations, developers should be aware that the polyfills for `canvas` are not simple drop-in solutions in some cases.

For example, both [ExplorerCanvas](https://groups.google.com/forum/?fromgroups#!searchin/google-excanvas/drawImage) and [FlashCanvas](https://groups.google.com/forum/?fromgroups#!searchin/flashcanvas/drawImage) may have difficulties handling the commonly used `drawImage` method. FlashCanvas cannot be passed the bitmap data from a DOM-based `Image` object, and therefore has to re-request the asset in the Flash Player causing undesired latency and flickering. Developers should be careful when handling image data and ensure thorough testing due to the unreliability and technical limitations of these features in the polyfills.

That isn't to say `canvas` shouldn't be used if cross-browser compatibility is a concern. Existing polyfills are more than capable of rendering simpler bitmaps such as [charts/graphs](http://www.jqplot.com/deploy/dist/examples/kcp_pyramid2.html), [visualizations](http://thejit.org/static/v20/Jit/Examples/Sunburst/example2.html), and even [starfields](http://flashcanvas.net/examples/www.chiptune.com/starfield/starfield.html)! For these uses and many more, `canvas` is highly encouraged.
