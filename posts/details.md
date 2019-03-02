feature: &lt;details> & &lt;summary>
status: use
tags: polyfill
kind: html
moreurl: https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/
polyfillurls: [`<details>` polyfill](https://github.com/javan/details-element-polyfill)

Use the `<details>` (and optionally the `<summary>`) element if you intend to show a summary which, when clicked, reveals detailed information. Currently not supported in any version of [Internet Explorer or Edge](https://caniuse.com/#feat=details).

Without polyfill, non-supporting browsers will fall back to displaying the element in the opened state.
