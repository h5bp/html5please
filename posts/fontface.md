feature: @font-face
status: use
tags: fallback
kind: css
polyfillurls:

Use [Google Fonts](http://www.google.com/fonts) for hundreds of free, open-source fonts optimized for the web. [Font Squirrel Generator](http://www.fontsquirrel.com/fontface/generator) for fonts you have license for using as web fonts. [Fontspring @font-face syntax](http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax) is also the most bullet-proof way of serving web fonts. You do not need polyfills - just fonts in several formats; WOFF is preferred, followed by TTF and then EOT. 

Also, don't use solutions like sIFR or Cufon anymore, as they can cause accessibility and performance problems.
