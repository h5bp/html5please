feature: text-overflow
status: use
tags: none 
kind: css
polyfillurls:

Text overflow is most commonly used for `text-overflow: ellipsis`. Per Firefox 7, all modern browsers now support this property prefixless and you should use it. On unsupported browsers, it merely does not render the ellipsis, so we recommend that you do not use a polyfill. However, there is a [jQuery plugin](http://www.bramstein.com/projects/text-overflow/) in the unlikely event of you needing one. 
