feature: FormData API
status: caution
tags:
kind: api
polyfillurls:

XMLHttpRequest Level 2 adds support for the new [FormData](http://www.w3.org/TR/XMLHttpRequest2/#interface-formdata) interface,
which provides a way to easily construct a set of key/value pairs representing
form fields and their values, and can be sent using the XMLHttpRequest
`send()` method. A FormData object can be constructed from an
already existing form or created programmatically.

Sending input values can easily be done already. For instance, the MooTools
framework has a [toQueryString()](http://mootools.net/docs/core/Element/Element#Element:toQueryString)
method that can create a query string from any element. What's new with
FormData is that it can send files!

<pre>
var xhr = new XMLHttpRequest()
, file = document.getElementById('myfile')
, fd = new FormData()

fd.append(file.name, file)

xhr.open("POST", '/api/file-upload')
xhr.send(fd)
</pre>

[FileAPI](http://www.w3.org/TR/FileAPI/) can also be used to send files but you
need to construct the body of the XHR by hand and send it using the [sendAsBinary()](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary%28%29)
method, which is only implemented in Firefox. This might also use a lot of
memory since the whole content of the file must be read in memory in order
to build the body, whereas FormData sends packets.
