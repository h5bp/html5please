feature: selectors
status: use
tags: fallback gtie6
kind: css
polyfillurls:

Most CSS Selectors are supported from IE7 onwards, so you should be safe to use them. But do note that, on browsers that do not support these selectors, a whole rule will be detected as invalid if these unsupported selectors are present. For example, in IE6 `#main, p:first-child {}` would be invalid because it is unable to understand `p:first-child`. We strongly recommend you do not try to polyfill this, but if you do need one, you can use [Selectivizr](http://selectivizr.com/).

#### When you sunset IE6 support, you can use:

* `tr > td` : Immediate descendant (child) selector.
* `dt + dd` : next sibling selector
* `dt ~ dd` : any following sibling
* `div[attr]` and `img[src$=png]` : Attribute selector (starts with, ends with, contains).
* `p:first-child`
* `div:hover` and `:hover` state on all non-`<a>`'s
* `li.food.vegetable` : without worrying about the [chained classes bug](http://paulirish.com/2008/the-two-css-selector-bugs-in-ie6/)


#### When you sunset IE7 support, you can use:

* ` :before, :after` and generated content
* `:focus` for elements with current focus

#### When you sunset IE8 support, you can use:

* These very useful selectors: <a href="http://css-tricks.com/how-nth-child-works/">`:nth-child(n)`</a>, `:last-child`, `:target`, `:not(s)`, `:enabled`, `:disabled`, `:checked`, `::selection`
* These ones, too: `:root`, `:nth-last-child(n)`, `:nth-of-type(n)`, `:nth-last-of-type(n)`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty`

<!--

Resources:

* http://coding.smashingmagazine.com/2009/10/14/css-differences-in-internet-explorer-6-7-and-8/
* http://www.bennadel.com/blog/2306-What-CSS-Properties-Are-Supported-When-You-Drop-IE6-Support.htm
* http://analogysoft.com/learning/ui-hulk-out/#beyondie6
* http://msdn.microsoft.com/en-us/library/cc351024(v=vs.85).aspx#selectors

	[].forEach.call( document.querySelectorAll('td'), function(elem){
	  if (elem.innerText.trim() == 'No') elem.style.backgroundColor = 'red';
	  if (elem.innerText.trim() == 'Yes') elem.style.backgroundColor = 'green';
	});

-->
