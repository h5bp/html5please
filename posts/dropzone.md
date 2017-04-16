feature: dropzone
status: avoid
tags: polyfill nomobile
kind: html
polyfillurls: https://github.com/stevendwood/html5-dropzone
moreurl: https://html.spec.whatwg.org/multipage/interaction.html#the-dropzone-attribute

The `dropzone` attribute can be added to any HTML element, and indicates that the element is a drop target.  Working with the native drag and drop API can be a pain, due in part to the number of events that you need to listen for and cancel in order to tell the browser whether an element accepts a drop.  The `dropzone` attribute declaritvely tells the browser that an element accepts a drop when the dragged data matches the kind and type specified by the attribute value.

Unfortunately it has not been implemented by any browser vendor, and at this stage it's not clear whether it ever will.  However the [html5-dropzone](https://github.com/stevendwood/html5-dropzone) library provides a polyfill for IE10+ and Chrome/Safari/Firefox if you are interested in using it.
