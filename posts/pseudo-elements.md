feature: pseudo elements
status: use
tags: none
kind: css
polyfillurls:

The pseudo-element notation was updated to use a double colon - `::` - in the CSS3 Selectors module. The CSS module requires that browsers support both the single and double colon notations for the pseudo-elements introduced in CSS1 and CSS2 - `:first-line`, `:first-letter`, `:before` and `:after`. Therefore, if you intend to support IE8+, you should use the earlier single colon notation. 

When adding generated content to your page with `:before` and `:after`, make sure that it is only for presentation and not to add content that should be included in the HTML source, as it may not be accessible.
