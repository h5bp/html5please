feature: HTML5 elements
status: use
tags: gtie8 polyfill
kind: html
polyfillurls: [html5shiv](http://code.google.com/p/html5shiv/), [html5shiv (github)](https://github.com/aFarkas/html5shiv/), [accessifyhtml5.js](https://github.com/yatil/accessifyhtml5.js)

All current browsers, except Internet Explorer 8 and below, support the use of the new HTML5 elements (e.g., `<header>`, `<footer>`, `<nav>`, `<article>`, `<section>`, etc.). However, they aren’t always mapped to accessibility APIs as the [HTML5 spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/elements.html#wai-aria) requires. Currently [only Firefox does this](http://html5accessibility.com/), but other browsers are implementing the accessibility APIs quickly. In the meantime, [Accessifyhtml5.js](https://github.com/yatil/accessifyhtml5.js) maps them correctly.

The notes below only apply to Internet Explorer 8 and below:

The [html5shiv](http://code.google.com/p/html5shiv/) enables you to use the new HTML5 elements in your markup (and Modernizr does the exact same by default).

If you insert any of these new elements later on (via AJAX or templating), the html5shiv will handle this for you (as of v3). [jQuery 1.7](http://blog.jquery.com/2011/11/03/jquery-1-7-released/) has this functionality baked in.

Lastly, if you need these elements to print correctly, use [html5shiv-printshiv.js](https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv-printshiv.js).
