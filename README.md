# HTML5 Please

[![Build Status](https://travis-ci.org/h5bp/html5please.svg)](https://travis-ci.org/h5bp/html5please)
[![devDependency Status](https://david-dm.org/h5bp/html5please/dev-status.svg)](https://david-dm.org/h5bp/html5please#info=devDependencies)

Look up HTML5, CSS3, etc features, know if they are ready for use, and if so
find out how you should use them – with polyfills, fallbacks or as they are.

## Before you begin

Make sure you have all dependencies installed.

1. Install [NodeJS](http://nodejs.org/#download)
2. Install [Sass](http://sass-lang.com/download.html) & [Compass](http://compass-style.org/)

  ```sh
  $ gem install sass compass
  ```
3. In your terminal, navigate to the project and type:

  ```sh
  $ npm install
  ```

## Getting Started

* To generate the `index.html` page, type:

  ```sh
  $ npm run render
  ```

* To start the watchers and open the project in your browser:

  ```sh
  $ npm run watch
  ```

* Each of the features requires its own markdown file under `posts`
folder. It is easy to create using the node script on the parent
directory, type:

  ```sh
  $ npm run new
  ```

  And start entering details about the feature you want to add.
