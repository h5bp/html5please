feature: &lt;input type=date>
status: caution
tags: polyfill gtie9
kind: html
polyfillurls: [webshims](http://afarkas.github.com/webshim/demos/demos/webforms.html), [html5widgets](http://www.useragentman.com/blog/2010/07/27/cross-browser-html5-forms-using-modernizr-webforms2-and-html5widgets/), 

There are many date inputs: `datetime-local, date, time, month, week` that should provide a datepicker to the user. For a long time, WebKit offered a spinner UI on these inputs, but this was an incomplete implementation (and has since been removed). 

A few polyfills offer a proper datepicker UI, if the feature is not offered natively. 

We suggest you use Modernizr to detect this feature, as it has correctly detected these features, regardless of WebKit's partial implementation or other browser bugs.
