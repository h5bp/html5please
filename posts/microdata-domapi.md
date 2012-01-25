feature: Microdata DOM API
status: use
tags: ie6 gtie6
kind: API
polyfillurls: [microdata shim](https://github.com/termi1uc1/Microdata-JS)

Microdata is a new lightweight semantic meta-syntax. Using attributes, we can define nestable groups of name-value pairs of data, called microdata, which are generally based on the page’s content. It gives us a whole new way to add extra semantic information and extend HTML5. Microdata is already being used by google to extract semantic meta data from your webpage.

The Microdata DOM API is helpful because you can manipulate items and properties on a page programmatically, perhaps to present the information in a searchable/filterable manner, or deliver it to another application somewhere else.

It's supported by Opera and [also being implemented by Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=591467)

IE6+ support can be done using [this ES5/DOM shim](https://github.com/termi1uc1/ES5-DOM-SHIM)