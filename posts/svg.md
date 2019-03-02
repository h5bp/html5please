feature: <svg>
status: use
tags: gtie8 polyfill
kind: svg
polyfillurls:[SVGWeb](https://code.google.com/p/svgweb/)

SVG has had good support for several years in most browsers, except for Internet Explorer. IE9 brings support, which means for oldIE you can use [SVGWeb](https://code.google.com/p/svgweb/) as a polyfill, or create SVG dynamically via [Raphael](http://raphaeljs.com/) (which uses a VML fallback).

For Android Browser support, you can use [CanVG](https://github.com/gabelerner/canvg). Meanwhile [D3.js](https://mbostock.github.io/d3/) is an SVG and DOM library for data visualization.
