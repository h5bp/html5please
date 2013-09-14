feature: Vibration
status: avoid
tags: none
kind: api
polyfillurls:
moreurl: https://developer.mozilla.org/en-US/docs/WebAPI/Vibration

Vibration enables web apps access to a supporting device's force feedback motor.

The Vibration API is specifically targetted towards the gaming use case, and not intended for activities such as notifications or alerts on a user's mobile phone for example.

The API currently exists as a [W3C Candidate Recommendation](http://www.w3.org/TR/vibration/) with it's characteristics still up for debate from the wider community.

While there is a basic implementation in Webkit, no major Webkit vendors has yet implemented support for the feature. Currently [Firefox and Firefox Mobile](https://developer.mozilla.org/en-US/docs/WebAPI/Vibration) support the API through `window.navigator.vibrate()` as opposed to `window.vibrate()`.
