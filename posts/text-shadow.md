feature: text-shadow
kind: css
status: use
tags: gtie9
polyfillurls:

All modern browsers support text-shadow except IE. Since it's mostly used for decorative purposes, we do not recommend using a polyfill; just make sure the text is still legible without a text-shadow. We also advise you to avoid large text-shadows because they can have a negative impact on performance.

Sometimes you may do light/transparent text with an invert text-shadow. In these cases, we recomend to feature detect (with Modernizr) so you can provide solid color `.no-textshadow` fallback styling.
