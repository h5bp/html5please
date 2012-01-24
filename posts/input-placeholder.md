feature: input[placeholder]
status: use
tags: gtie9
kind: html
polyfillurls:[Placeholder jQuery Plugin](https://github.com/mathiasbynens/jquery-placeholder)

Input placeholders are simply ignored in IE 9 and below. Note that they are only applied when the **type** of the input is *text*, *password*, *search*, *tel*, *url*, or *email*. *Textareas* can have placeholders, too. Otherwise, it is ignored.

`input[placeholder]` is commonly the first polyfill anyone writes and, as such, there are [many of them](http://bit.ly/polyfills). Password inputs and submit event clearing are among many of the gotchas that catch native implemenations; Mathias's polyfill below handles these cases very well.