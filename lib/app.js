// Native modules
var fs = require("fs");
  
// Third-party modules
var Backbone = require("backbone");
var Handlebars = require('handlebars');
var Markdown = require('node-markdown').Markdown;

//polyfill or no
Handlebars.registerHelper('polyfillaction', function(tags) {
  if(tags.indexOf('polyfill') > -1) return 'with <b class=polyfill>polyfill</b>';
  if(tags.indexOf('fallback') > -1) return 'with <b class=fallback>fallback</b>';
  return false;
});

// File paths
var paths = {
  output: "./index.html",
  template: "./template.html",
  posts: "./posts",
  githuburl: 'https://github.com/h5bp/html5please/blob/master/posts/'
};

// Ensures Backbone doesn't try to make a DOM element
Backbone.View.prototype._ensureElement = function() {};

exports.Feature = Backbone.Model.extend({
  initialize: function() {
    if (this.has("contents")) {
      var i, len, parts, key, val;
      var obj = { contents: "" };
      var docs = this.get("contents").split("\n\n");
      var lines = docs[0].split("\n");

      for (i = 0, len = lines.length; i < len; i++) {
        parts = lines[i].trim().split(":");
        
        if (parts.length < 2) {
          throw new Error("Invalid key: val");
        }
       
        key = parts[0];
        val = parts.slice(1).join(":");
        
        obj[key] = (key === 'polyfillurls') ?  "" + Markdown(val) : "" + val.trim();
      }

      obj.contents = "" + Markdown(docs.slice(1).join("\n\n"));

      if(this.has("editfrag")) {
        obj.editurl = paths.githuburl + this.get("editfrag");
      } 
      // Update the model to use the metadata and contents
      this.set(obj);
    }
  }
});

exports.Features = Backbone.Collection.extend({
  model: exports.Feature,

  sync: function(method, model, options) {
    var data = [];
    var files = fs.readdirSync(paths.posts);

    // Slice off the file extension for each
    files.filter(function(file) {
      return file.slice(-3);
    }).forEach(function(file) {
      data.push({
        contents: fs.readFileSync(paths.posts + "/" + file).toString(),
        editfrag: file
      });
    });

    // Call success with the fetched data
    options.success(data);
  }
});

exports.Markup = Backbone.View.extend({
  initialize: function() {
    // Read in the template and compile via handlebars to a reusable
    // property that can be accessed in render.
    var source = fs.readFileSync(paths.template).toString();
    this.template = Handlebars.compile(source);    
  },
  
  render: function() {
    console.log("rendering to the file…");

    // Render the template to the output file
    var html = this.template({ features: this.collection.toJSON() });
    fs.writeFileSync(paths.output, html);
    console.log("Your index page is now ready")
  }
}); 
