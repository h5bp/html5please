feature: <video>
status: use
tags: polyfill gtie8
kind: html
polyfillurls: [Video.js](http://videojs.com/), [mediaelementjs](http://mediaelementjs.com/)

Do note you need to supply your video in various formats to cater to all browsers and fallbacks&mdash;[Miro Video Converter](http://www.mirovideoconverter.com/) makes this trivial. H264 and WebM cover all browsers (except Firefox 3.6 which needs Ogg Theora). Use one of the polyfills below or gracefully handle all cases without any scripting, as explained by Kroc Camen in [Video for Everybody](http://camendesign.com/code/video_for_everybody).

There is also an incredibly useful service called [vid.ly](http://vid.ly) which converts video online into all necessary formats and provides a short url that detects your browser/hardware and sends the correct format. [Archive.org](http://archive.org) also converts MP4 videos uploaded to OGG automatically, and does the same with audio.

