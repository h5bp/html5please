feature: box-shadow
status: caution
tags: none
kind: css
polyfillurls:

Box-shadow is safe to use most of the time, except when you are applying it on a large area, which might cause significant performance hit when the user interacts with your page (on scroll, hover, etc). You do not need a polyfill, and in the unlikely event of needing one, use [CSSPie](http://css3pie.com/).
