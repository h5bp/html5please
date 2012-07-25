feature: <input type=search>
status: caution
tags: polyfill
kind: html

A search input will fall back to a plain text input if it's not supported. The standard doesn't specify any behavior for this type; so far, Safari and Chrome support a clear button when there's content in the text box, in addition to a different style.

Technically every browser supports this, since there is no defined behavior.  If you need the clearing behavior, there are many [simple ÎÐscripts](http://www.queness.com/post/8434/re-create-googles-search-input-field-and-submit-button) available.
