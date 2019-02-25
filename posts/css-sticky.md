feature: position:sticky
status: caution
tags: prefixes polyfill
kind: css
polyfillurls: [Stickyfill](https://github.com/wilddeer/stickyfill)

`position: sticky` combines aspects of relative and fixed positioning. Elements to which it is applied initially act as though they are `position: relative`, but switch to acting like `position: fixed` when they reach a specified position relative to the viewport. This behavior is often useful for section headings or navigational sidebars. [This Mozilla presentation video](https://air.mozilla.org/intern-presentation-ford/) shows how `position: sticky` behaves in common use-cases.

Supported unprefixed in Firefox 30.0+. Supported with a prefix (as `-webkit-sticky`) in OS X Safari 7.0+ and iOS Safari 6.0+. Currently part of the [CSS Positioned Layout Module Level 3 W3C Working Draft](https://drafts.csswg.org/css-position-3/).

Caution is advised since the spec is currently only at the Working Draft stage and thus can be subject to change. The usage of a polyfill is strongly recommended due to the current level of browser support. Signs currently seem positive for browser support increasing in the future.

Use [Stickyfill](https://github.com/wilddeer/stickyfill) for a wide range of use cases with top aligned sticky positioned blocks and table cells.
