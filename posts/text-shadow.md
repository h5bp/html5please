feature: text-shadow
kind: css
status: use
tags: gtie9
polyfillurls:

All modern browsers support `text-shadow`. It isn't supported in IE9, but we do not recommend to use a polyfill. Since it's just a propery for decorative purposes, just make sure the text is still legible without a text-shadow. We also advise you to avoid large text-shadows because they can have a negative impact on performance.

Sometimes you may do light/transparent text with an invert text-shadow. In these cases, we recomend to feature detect (with Modernizr) so you can provide solid color `.no-textshadow` fallback styling.
