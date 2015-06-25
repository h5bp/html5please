feature: img[srcset]
status: use
tags: fallback noie
kind: html
polyfillurls: [PictureFill](http://scottjehl.github.io/picturefill/)
moreurl: https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/

The `srcset` attribute for images allows you to specify different resolutions or pixel-density versions of images. Instead of specifying which image to use at each condition (as you might with a media query or with a `<picture>` element) the browser decides which is the most appropriate version to use and only makes one request for the image.

If you know what size the image will display at, the optional `sizes` attribute helps the browser to decide the most appropriate image before waiting to reflow the entire DOM first. For example, `sizes="100vw"` means a full-width image. (Percentage values will not work here, since the browser will have to answer the question "percent of what?", which requires a full DOM reflow.)

Because `srcset` is an attribute on the standard `<img>` tag, browsers that do not understand it fallback to the image specified in `src`, making this safe to use immediately. Firefox supports `srcset` now as of version 38, but Safari only has [partial support](http://caniuse.com/#feat=srcset) for resolution switching only. A [polyfill](http://scottjehl.github.io/picturefill/) is available if you want to bring this functionality to older browsers and Internet Explorer, but it is not required.
