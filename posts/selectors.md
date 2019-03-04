feature: selectors
status: use
tags: fallback
kind: css
polyfillurls:
moreurl: https://docs.microsoft.com/en-us/previous-versions//cc351024(v=vs.85)#selectors

Most CSS Selectors are supported from IE8 onwards, so you should be safe to use them. But do note that, on browsers that do not support these selectors, a whole rule will be detected as invalid if these unsupported selectors are present. For example, in IE6 `#main, p:first-child {}` would be invalid because it is unable to understand `p:first-child`. We strongly recommend you do not try to polyfill this, but if you do need one, you could use [Selectivizr](http://selectivizr.com/).

#### When you sunset IE8 support, you can use:

* These very useful selectors: <a href="https://css-tricks.com/how-nth-child-works/">`:nth-child(n)`</a>, `:last-child`, `:target`, `:not(s)`, `:enabled`, `:disabled`, `:checked`, `::selection`
* These ones, too: `:root`, `:nth-last-child(n)`, `:nth-of-type(n)`, `:nth-last-of-type(n)`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty`

<!--
	[].forEach.call( document.querySelectorAll('td'), function(elem){
	  if (elem.innerText.trim() == 'No') elem.style.backgroundColor = 'red';
	  if (elem.innerText.trim() == 'Yes') elem.style.backgroundColor = 'green';
	});
-->
