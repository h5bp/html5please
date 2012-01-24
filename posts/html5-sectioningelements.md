feature: HTML5 sectioning elements
status: use
tags: gtie8,polyfill,article,header,nav
kind: html
polyfillurls: [html5shiv](http://code.google.com/p/html5shiv/), [html5shiv (github)](https://github.com/aFarkas/html5shiv/), [accessifyhtml5.js](https://github.com/yatil/accessifyhtml5.js)

All browsers except oldIE (IE <=8) handle new sectioning elements (like `<header>`, `<footer>`, `<nav>`, `<article>`, and `<section>`) fine. However they aren’t always mapped to accessibility APIs as the [HTML5 spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#wai-aria) requires. Currently [only Firefox does this}(http://html5accessibility.com/) but other browsers are implementing the a11y APIs quickly. In the meantime, [Accessifyhtml5.js](https://github.com/yatil/accessifyhtml5.js) maps them correctly.

The notes below only apply to oldIE:

The [html5shiv](http://code.google.com/p/html5shiv/) enables you to use these in your markup (and Modernizr does the exact same by default). 

If you introduce some of these elements later on (via AJAX or templating), html5shiv will also handle this for you (as of v3). [jQuery 1.7](http://blog.jquery.com/2011/11/03/jquery-1-7-released/) also has this functionality baked in.

Lastly, if you need these elements to print correctly, use [html5shiv-printshiv.js](https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv-printshiv.js) which addresses an IE bug there.