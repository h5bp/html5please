feature: <input type=search>
status: use
tags: 
kind: html
moreurl: http://www.wufoo.com/html5/types/5-search.html

A [search input](http://wufoo.com/html5/types/5-search.html) will fall back to a plain text input if it's not supported. The standard doesn't specify any behavior for this type, but recommends styling to match the platform's search fields (e.g. with rounded corners on OS X).  The style cancels out many CSS styles from being applied, and can be removed with `-webkit-appearance: none;`.  The recommendation here is to use `input[type=search]` to enhance your forms, so long as you're okay with the styling difference.

While the standard does not specify any behavior, Webkit browsers supply a button to clear the input when it has a value.

Also see [more about styling `search inputs`](http://css-tricks.com/webkit-html5-search-inputs/) responsibly on CSS Tricks' blog.