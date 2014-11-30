feature: border-image
status: use
tags: fallback prefixes
kind: css
polyfillurls:

All main browsers support this unprefixed. You should let this fall back to either a normal solid border or no border at all, depending on whether a border is essential for readability. We recommend that you avoid polyfills.

There were some syntax changes (requiring the `fill` keywords) that may catch you off-guard; [David Baron's border-image post](http://dbaron.org/log/20120612-border-image) describes the best course of action.
