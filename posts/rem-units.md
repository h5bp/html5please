feature: Rem (root em) units
status: use
tags: fallback gtie8
kind: css
polyfillurls: [Rem unit polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill)

`rem` is a relative css unit, similar to `em`, but calculated from the font size of the root (`<html>`) element. `rem`s are a good choice for sizing multiple elements on the page relative to each other while avoiding complex math from nested `em`s and maintaining the user's ability to resize text. Wide browser support including IE9+ and easaly calculated pixel fallbacks make this unit good to go.