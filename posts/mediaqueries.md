feature: media queries
status: use
tags: gtie8
kind: css
polyfillurls:

Media Queries (MQ) work on all modern browsers. OldIE (IE6,7,8) unfortunately do not understand media queries on features, which means none of your CSS within media queries will be parsed by them. We recommend you make peace with that (or use Chrome Frame), but if you absolutely cannot, then you can use [Respond.js](https://github.com/scottjehl/Respond)<!--, but be aware it has performance overhead that slows down page load-->.

If you choose a mobile first 'bottom-up' approach where your default styles target the smallest screens first, then be sure to give oldIE <a href="http://jonikorpi.com/leaving-old-IE-behind/">separate styles</a>.
