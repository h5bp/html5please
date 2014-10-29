# HTML5 Please

Look up HTML5, CSS3, etc features, know if they are ready for use, and if so find out how you should use them – with polyfills, fallbacks or as they are.

## Before you begin

Make sure you have all dependencies installed.

1. Install [NodeJS](http://nodejs.org/#download);
2. Install [Sass](http://sass-lang.com/download.html);
3. Install [Compass](http://compass-style.org/).

## Getting Started

1. In your terminal, navigate to this project and type:

  ```sh
  $ npm install
  ```

2. To generate the `index.html` page, type:

  ```sh
  $ node ./lib/
  ```

3. To check if the urls are accurate (and for deploying to production), type:

  ```sh
  $ node ./lib/ checkurls
  ```

4. All styles must be in the included Sass file rather than be updated in the generated CSS file. To compile them is to use [Compass](http://compass-style.org/):

  ```sh
  $ compass watch .
  ```

5. Each of the features requires its own markdown file under `posts` folder. It is easy to create using the node script on the parent directory, type:

  ```sh
  $ node new_feature.js
  ```

  And start entering details about the feature you want to add.
