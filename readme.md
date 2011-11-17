Nov 7 2011

This branch uses node. To compile, in your terminal, within the project folder, type:

  node .

This project now requires Backbone and Underscore. 

To compile the CSS, use (in another terminal window):

  compass watch .


TODO:
---

1. Use a better templating library. Underscore is ugly
2. Hook up list.js for filtering
3. Need to not use JSON because of validating-hell-thanks-to-missing-comma. YAML has no good node parser, so what else?
4. Need to refactor features.json (need to be done even if we stop using JSON)



First Commit
-------------

July 9 2011
A very basic idea of how this would look like. Lame filters and colors. See: http://dl.dropbox.com/u/952/gfs/index.html

"How do I use prefixes" would link to:

1. Where all prefixes occur (css properties, values, DOM interfaces). 
2. How to use modernizr's prefix-returning function for use in your script.
3. A reduced snippet from there?
4. Graceful degradation guidelines
5. Link to Tantek wiki page on why we have prefixes (and when we wont have them).


"Tools for Feature Support":

1. Css3please.com
2. modernizr polyfill wiki
3. modernizr
4. CSS Preprocessors? 
5. caniuse.com?

To do
------
1. Make this list a JSON. So, we can link directly to MDN and the Github wiki.
3. Fix the filters
5. Link to Paul Irish's post on responsible polyfilling.
6. Link each recommendation to a "more details" page in the wiki (thnx @necolas). 

Design
------
2. Footer: what/if
3. Different color states for badges "use this/ dont / etc"
5. Proper prefixes/fallbacks


Context
------
Started at: http://oksoclap.com/gfs


How to develop
--------------

   compass watch .
