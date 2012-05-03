feature: media queries
status: use
tags: gtie8
kind: css
polyfillurls:

Media Queries (MQ) work on all modern browsers. OldIE (IE6,7,8) unfortunately do not understand media queries on features, which means none of your CSS within media queries will be parsed by them. We recommend you make peace with that (or use Chrome Frame), but if you absolutely cannot, then you can use [Respond.js](https://github.com/scottjehl/Respond) but be aware it has performance overhead that slows down page load.

If you choose a [mobile first approach](http://bradfrostweb.com/blog/web/mobile-first-responsive-web-design/), you'll be targeting smallest screens first, then the different media queries will take effect as the window/device size increases. But if the browser doesn't support media queries and you don't use a polyfill, then the 'mobile first' styles will be applied to OldIE. You can serve a [separate stylesheet for IE to help with this](http://nicolasgallagher.com/mobile-first-css-sass-and-ie/).
