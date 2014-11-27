feature: Web Components
status: caution
tags: polyfill
kind: api
polyfillurls: [webcomponents.js](http://webcomponents.org/polyfills/)
moreurl: http://webcomponents.org/

Web Components are a collection of standards which are working their way through the W3C:

- [HTML Templates](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element), a native templating system which allows reusable HTML code using the new `<template>` tag

- [Custom Elements](http://w3c.github.io/webcomponents/spec/custom/), which allows authors to define and use custom HTML elements

- [Shadow DOM](http://w3c.github.io/webcomponents/spec/shadow/), allows authors to create an independent new DOM tree nested inside another DOM tree

- [HTML Imports](http://w3c.github.io/webcomponents/spec/imports/), which allows authors to embed HTML documents in other HTML files, using the `<link rel=import>` element

Taken together, these proposed specs have the potential to bring huge enhancements to our web development toolkit. They allow us to bundle markup and styles into custom HTML elements, that means the styles that you write always render as you intended, and your HTML is safe from the prying eyes of external JavaScript.

At present, full support is only available in Chrome and Opera. However, given the potential benefits Web Components bring to the table, it might be a good idea to start experimenting with the APIs now, and help get constructive feedback and tests back to the spec writers. Check [Can I Use](http://caniuse.com/#search=components) or [Are We Componentized Yet?](http://jonrimmer.github.io/are-we-componentized-yet/) for up to date browser support status.

Libraries such as [Polymer](http://www.polymer-project.org/) (from Google) and [X-Tag](http://x-tags.org/) (from Mozilla) are driving the evolution of these specs and makes it easier to create your Web Components.
