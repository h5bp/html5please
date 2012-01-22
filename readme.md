## Before you begin

1. Install Node (with npm): http://nodejs.org/#download
2. Install Sass: http://sass-lang.com/download.html 
3. Optionally, install Compass: http://compass-style.org/

## Getting Started

1. In your terminal, navigate to this project and type: 
```
  npm install .
```

2. To generate the index.html page, type:
```
  node .
```
3. *Important Note*: To check if the urls are accurate (and for deploying to production), type:
```
  node . checkurls
```

4. Each of the features requires its own markdown file under `posts` folder. It is easy to create using the shell script on the parent directory. Just type `./new_feature.sh` and start entering details about the feature you want to add. 

5.  All styles must be in the included `Sass` file rather than be updated in the generated CSS file. Easiest way to compile them is to use [Compass](http://compass-style.org/):
```
  compass watch .
```

## Changelog

### Dec 12 2011

- No more JSON!
- Now we create each 'feature' with a markdown file that has YAML-like front matter. To make this easy, there is a `new_feature.sh` script that you can run to automate the creation of the file for each feature that needs to be written about. e.g. you would do `./new_feature.sh` and then enter "text-shadow" if you want to create a markdown file for the text-shadow feature. There is a `test.md` if you want to refer to (but really the shell script should do all the prompting for you to get set up). It even starts your default editor for you with the newly created file if you have the $EDITOR set up in your PATH.
- `features.json` is retired, only to be used for reference at best (as if its any useful).
- Plan is to port content directly from the modernizr wiki for now, link to caniuse data for more info. 
- Likely, the templates might change in the meanwhile, I welcome your feedback on this setup. If you have better ideas, lemme know!

So new workflow for adding content here would be to run `./new_feature.sh`. But everything else remains the same. 

### Nov 7 2011

Branch now uses node and compass!

### July 9 2011
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


Context
------
Started at: http://oksoclap.com/gfs

