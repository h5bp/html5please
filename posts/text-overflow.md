feature: text-overflow
status: use
tags: none 
kind: css
polyfillurls:

Text Overflow is most commonly used for `text-overflow: ellipsis`. With Firefox 7, all modern browsers now support this property prefixless and you should use it. On unsupported browsers, it merely does not render the ellipsis which we feel is not bad enough to merit a polyfill. However, there is a [jQuery plugin](http://www.bramstein.com/projects/text-overflow/) in the unlikely event of you needing one. 
