feature: drag n drop
status: caution
tags: polyfill nomobile
kind: api
polyfillurls:[dropfile](https://github.com/MrSwitch/dropfile), [fileSaver](https://github.com/eligrey/FileSaver.js), [jDataView](https://github.com/vjeux/jDataView)

Drag and Drop has been standardized in HTML5 based on Internet Explorer's original implementation. Therefore, it already has wide support (except Opera), but many feel frustrated when using the API. You may want to use jQuery UI Draggable (or another JavaScript library) to handle this for you. Meanwhile the proposed [[dropzone]](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#the-dropzone-attribute) attribute will improve the situation as it gains browser support.
