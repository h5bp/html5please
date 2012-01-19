feature: &lt;video>
status: use
tags: polyfill gtie8
kind: html
polyfillurls: [Video.js](http://videojs.com/), [mediaelementjs](http://mediaelementjs.com/)

Do note you need to supply your video in various formats to cater to all browsers and fallbacks&mdash;[Miro Video Converter](http://www.mirovideoconverter.com/) makes this trivial. H264 and WebM cover all browsers (except Firefox 3.6 which needs Ogg Vorbis). Use one of the polyfills below or gracefully handle all cases without any scripting as explained by Kroc Camen in [Video for Everybody](http://camendesign.com/code/video_for_everybody).
