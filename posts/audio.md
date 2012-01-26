feature: <audio>
status: use
tags: polyfill
kind: html
polyfillurls: [mediaelement.js](http://mediaelementjs.com/), [jPlayer](https://github.com/happyworm/jPlayer), [Sound Manager 2](http://www.schillmania.com/projects/soundmanager2/)

As is the case with video, you need to provide your audio file in multiple formats for these to work, namely in [Ogg Vorbis and AAC](http://www.scirra.com/blog/44/on-html5-audio-formats-aac-and-ogg). jPlayer has a jQuery dependency. Sound Manager has an extensive API for further customization. [mediaelement.js](http://mediaelementjs.com/) offers the HTML5 media element API through Flash in the fallback case and offers uniform styling across browsers and to the Flash widget.
