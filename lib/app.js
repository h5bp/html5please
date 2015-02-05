// Native modules
var fs = require('fs');
var request = require('request');

// Third-party modules
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var marked = require('marked');
var async = require('async');

// polyfill or no
Handlebars.registerHelper('polyfillaction', function(tags) {
  if (tags && tags.indexOf('polyfill') > -1) {
    return 'with <b class=polyfill>polyfill</b>';
  }
  if (tags && tags.indexOf('fallback') > -1) {
    return 'with <b class=fallback>fallback</b>';
  }
});

Handlebars.registerHelper('featuretag', function(feature) {
  var tag = /^<(.*)>/.exec(feature);
  if (tag) {
    return '&lt;' + tag[1] + '>';
  } else {
    return feature;
  }
});

Handlebars.registerHelper('testurl', function(url) {
  return /caniuse/.exec(url) !== null ? 'View browser share %' : 'Learn more';
});

// File paths
var paths = {
  output: './src/index.html',
  template: './src/template.html',
  posts: './posts',
  githuburl: 'https://github.com/h5bp/html5please/blob/master/posts/',
  caniuseurl: 'http://caniuse.com/'
};

// Tag Array
var featuretags = [];

// Ensures Backbone doesn't try to make a DOM element
Backbone.View.prototype._ensureElement = function() {};

exports.Feature = Backbone.Model.extend({
  initialize: function() {
    if (this.has('contents')) {
      var i;
      var len;
      var parts;
      var key;
      var val;
      var posttags;
      var obj = { contents: '' };
      var docs = this.get('contents').split('\n\n');
      var lines = docs[0].split('\n');

      if (this.has('editfrag')) {
        obj.editurl = paths.githuburl + this.get('editfrag') + '.md';
        obj.slug = this.get('editfrag');
      }

      for (i = 0, len = lines.length; i < len; i++) {
        parts = lines[i].trim().split(':');

        if (parts.length < 2) {
          console.error(lines);
          throw new Error('Invalid key: val ... ' + obj.slug, parts);
        }

        key = parts[0];
        val = parts.slice(1).join(':').trim();

        if (key === 'tags') {
          posttags = val.split(' ');

          // if it is not whitespace separated it must be comma separated
          if (posttags.length === 1) {
            posttags.join(' ').split(',');
          }
          posttags = posttags.map(function(tag) {
            tag = tag.trim();

            // catch use of tags like polyfill, gtie9
            tag = /([^,]*)/.exec(tag)[1];
            return tag;

          });
          val = posttags.join(' ');
        }

        if (key === 'kind') {
          obj.moreurl = paths.caniuseurl + obj.slug;
        }

        obj[key] = (key === 'polyfillurls') ?  '' + marked(val) : '' + val.trim();
      }

      obj.contents = '' + marked(docs.slice(1).join('\n\n'));


      // Update the model to use the metadata and contents
      this.set(obj);
    }
  }
});

exports.Features = Backbone.Collection.extend({
  model: exports.Feature,

  comparator: function (item) {
    return item.get('feature').replace(/<|>|@|(&lt;)/g, '').toLowerCase();
  },

  sync: function() {
    var data = [];
    var files = fs.readdirSync(paths.posts);

    // Slice off the file extension for each
    files.forEach(function(file, i) {

      // skip dotfiles
      if (file.indexOf('.') === 0) {
        return;
      }

      data.push(new exports.Feature({
        contents: fs.readFileSync(paths.posts + '/' + file).toString(),
        editfrag: file.slice(0, -3),
        id: i
      }));

    });

    // Call reset event with the fetched data
    this.reset(data);
  }
});

exports.Markup = Backbone.View.extend({
  initialize: function() {
    // Read in the template and compile via handlebars to a reusable
    // property that can be accessed in render.
    var source = fs.readFileSync(paths.template).toString();
    this.template = Handlebars.compile(source);
  },

  // Triggered only when argument checkurls is passed to CLI
  updateurls: function(updateUrlCallback) {
    console.log('updating caniuse data');
    var callback = callback;

    async.forEachSeries(
      this.collection.toArray(),
      function(feature, callback) {
      request({
        method: 'GET',
        uri: feature.get('moreurl'),
        headers: {
          'User-Agent': 'html5please'
        }
      }, function(error, response) {
        if (response.statusCode === 404) {
          console.log('url not found: ', feature.get('moreurl'));
          feature.unset('moreurl', { silent: true });
        }
        callback();
      });
    },
    function() {
      updateUrlCallback();
    });
  },

  render: function() {
    console.log('rendering to the file…');

    // Render the template to the output file
    var html = this.template({ featuretags: featuretags, features: this.collection.toJSON() });
    fs.writeFileSync(paths.output, html);
    console.log('Your index page is now ready at: ' + paths.output);
  }
});
