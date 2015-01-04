feature: drag n drop
status: use
tags: polyfill nomobile
kind: api
polyfillurls: [dropfile](https://github.com/MrSwitch/dropfile), [fileSaver](https://github.com/eligrey/FileSaver.js), [jDataView](https://github.com/vjeux/jDataView), [setDragImage-IE](https://github.com/MihaiValentin/setDragImage-IE)

Drag and Drop has been standardized in HTML5 based on Internet Explorer's original implementation.  The HTML5 spec adds additional capabilities including making any element draggable with the [`draggable`](http://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#the-draggable-attribute) attribute, and being able to work with files. 

It already has wide desktop support, but many feel frustrated when using the API. You may want to use jQuery UI Draggable (or another JavaScript library) to handle this for you, however if you want to work with data dragged from other applications or if you want to be able to drag data between browser tabs/windows, then HTML5 drag and drop is the only option.  Indicating that an element accepts drops causes particular frustration since there are so many events that need to be cancelled, however the proposed [`dropzone`](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#the-dropzone-attribute) attribute will improve the situation as it gains browser support.

No versions of Internet Explorer currently support the [`DataTransfer.setDragImage`](http://www.w3.org/TR/2010/WD-html5-20101019/dnd.html#dom-datatransfer-setdragimage) method. All versions of Internet Explorer will also throw an exception when the [`DataTransfer.setData`](http://dev.w3.org/html5/spec-preview/dnd.html#dom-datatransfer-setdata) method is invoked with a format other than "Text" or "Url". 

Internet Explorer 10 and above add support for [`DataTransfer.files`](http://dev.w3.org/html5/spec-preview/dnd.html#dom-datatransfer-files), however for older versions of IE you'll need to use one of the suggested polyfills if the use case you want to support involves dragging local files.

Currently the only mobile platforms supporting HTML5 drag and drop are Internet Explorer Mobile 10 and upwards.
