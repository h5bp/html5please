feature: input[placeholder]
status: use
tags: gtie9
kind: html
polyfillurls:[Placeholder jQuery Plugin](https://github.com/mathiasbynens/jquery-placeholder)

Input placeholders are simply ignored in IE 9 and below. Note that they are only applied when the **type** of the input is *text*, *password*, *search*, *tel*, *url*, or *email*. *Textareas* can have placeholders, too. Otherwise, it is ignored.

Per the [HTML specification](http://dev.w3.org/html5/spec/Overview.html#the-placeholder-attribute):
> The placeholder attribute represents a short hint (a word or short phrase) intended to aid the user with data entry. A hint could be a sample value or a brief description of the expected format. The placeholder attribute should not be used as an alternative to a label.

A properly implemented form should have labels and any placeholders should be supplementary.  As such, they are not required for successful completion of a form and use of a polyfill is often unwarranted.