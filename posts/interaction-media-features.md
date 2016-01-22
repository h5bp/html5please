feature: Interaction media features
status: caution
tags: polyfill
kind: css
polyfillurls: [mq4-hover-shim](https://github.com/twbs/mq4-hover-shim)
moreurl: http://www.jordanm.co.uk/post/66660448615/potential-use-cases-for-script-hover-and-pointer

The [Media Queries Level 4 Working Draft](http://dev.w3.org/csswg/mediaqueries-4/#mf-interaction) adds new media query features for checking whether the user's input mechanisms support hovering ([`hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) and [`any-hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover)) and how accurate they are ([`pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) and [`any-pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)).

The usage of polyfills is strongly recommended due to the current level of browser support (Edge, Chrome 41+, Opera 28+, and Safari 9 at the time of writing).

[mq4-hover-shim](https://github.com/twbs/mq4-hover-shim) provides support in non-bleeding-edge browsers for detecting the primary pointer's ability to hover or not (i.e. the `(hover: hover)` media query).
