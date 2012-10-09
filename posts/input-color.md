feature: <input type=color>
status: avoid
tags: polyfill gtie9
kind: html

A color input will fall back to a plain text input if it's not supported. So far, only Opera and Chrome support this.

You should probably avoid this until it has support in WebKit, Gecko or IE.
