feature: drag n drop
status: caution
tags: polyfill nomobile
kind: api
polyfillurls: [html5-dropzone](https://github.com/stevendwood/html5-dropzone), [dropfile](https://github.com/MrSwitch/dropfile), [fileSaver](https://github.com/eligrey/FileSaver.js), [jDataView](https://github.com/vjeux/jDataView)

Drag and Drop has been standardized in HTML5 based on Internet Explorer's original implementation. Therefore, it already has wide desktop support, but many feel frustrated when using the API. You may want to use jQuery UI Draggable (or another JavaScript library) to handle this for you, however, if you want to work with data dragged from other applications or if you want to be able to drag data between browser tabs/windows, HTML5 drag and drop is the only game in town.  Meanwhile the proposed [`dropzone`](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#the-dropzone-attribute) attribute will improve the situation as it gains browser support, you can use [html5-dropzone](https://github.com/stevendwood/html5-dropzone) in the meantime.

There is not much mobile support currently.
