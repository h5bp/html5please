feature: position:sticky
status: caution
tags: prefixes polyfill
kind: css
polyfillurls: [Fixed-sticky](https://github.com/filamentgroup/fixed-sticky), [Stickyfill](https://github.com/wilddeer/stickyfill), [Sticky](https://github.com/usablica/kissui.sticky)

`position: sticky` combines aspects of relative and fixed positioning. Elements to which it is applied initially act as though they are `position: relative`, but switch to acting like `position: fixed` when they reach a specified position relative to the viewport. This behavior is often useful for section headings or navigational sidebars. [This Mozilla presentation video](https://air.mozilla.org/intern-presentation-ford/) and [this live demo of the Fixed-sticky polyfill](http://filamentgroup.github.io/fixed-sticky/demos/demo.html) show how `position: sticky` behaves in common use-cases.

Supported unprefixed in Firefox 30.0+. Supported with a prefix (as `-webkit-sticky`) in OS X Safari 7.0+ and iOS Safari 6.0+. Currently part of the [CSS Positioned Layout Module Level 3 W3C Working Draft](http://dev.w3.org/csswg/css-position-3/).

Caution is advised since the spec is currently only at the Working Draft stage and thus can be subject to change. The usage of a polyfill is strongly recommended due to the current level of browser support. Signs currently seem positive for browser support increasing in the future.

Use [Fixed-sticky](https://github.com/filamentgroup/fixed-sticky) for simple top or bottom aligned stickies. Use [Stickyfill](https://github.com/wilddeer/stickyfill) for a wider range of use cases with top aligned sticky positioned blocks and table cells.
