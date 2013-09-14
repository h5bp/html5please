feature: Web Components
status: caution
tags: polyfill
kind: api
polyfillurls: [Polymer](http://www.polymer-project.org/)
moreurl: http://www.webcomponentsshift.com/

The [Web Components](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html) API is a collection of four different specs from the W3C designed to work together: 

- [HTML Templates](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html), a native templating system which allows reusable html code using the new &lt;template&gt; tag

- [Custom Elements](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/custom/index.html), which allows authors to define and use custom html elements

- [Shadow DOM](http://www.w3.org/TR/shadow-dom/) allows authors to create an independent new DOM tree nested inside another DOM tree

- [HTML Imports](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/imports/index.html), which allows authors to embed HTML documents in other HTML files, using the `<link rel=import>` element

Taken together, these proposed specs have the potential to bring huge enhancements to our web development toolkit, but the specs are very immature and currently undergoing rapid iteration. At present, experimental support is  available in Chrome Canary and Firefox Nightly. However, given the potential benefits Web Components bring to the table, it might be a good idea to start experimenting with the APIs now, and help get constructive feedback and tests back to the spec writers.

[Polymer](http://www.polymer-project.org/) is working on a set of polyfills designed to fill any gaps in browser support as Web Components are rolled out. It's still in pre-alpha, and should only be used in testing environments, but if it matures at a healthy rate the project could give us the opportunity to roll Web Components into the wild while the specs are still in draft.

[Another view of the status of Web Components is available here](http://jonrimmer.github.io/are-we-componentized-yet/):
<a href="http://jonrimmer.github.io/are-we-componentized-yet/">
![](http://i.imgur.com/EeOUtPu.png)
</a>
