feature: mediaqueries
status: use
tags: none
kind: css
polyfillurls:

Media Queries work on all modern browsers. IE6,7,8 unfortunately do not understand media queries on features, which means none of your CSS within media queries will be parsed by them. We recommend you make peace with that (or use Chrome Frame), but if you absolutely cannot, then you can use [Respond.js](https://github.com/scottjehl/Respond).
