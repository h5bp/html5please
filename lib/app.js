var Backbone = require("backbone");

var fs = require('fs');

var _ = require('underscore');

var OutputFile = "./index.html";

var TemplateFile = "./template.html";

Backbone.View.prototype._ensureElement = function() {};


exports.Feature = Backbone.Model.extend({  
  flatTags: function() {
   return this.get("tags").join(","); 
  }  
});



exports.Features = Backbone.Collection.extend({
  model: exports.Feature
});




exports.Markup = Backbone.View.extend({
  initialize: function() {
    var contents = fs.readFileSync(TemplateFile).toString();
    this.template = _.template(contents);
    
  },
  
  render: function() {
    var html = this.template({features: this.collection});
    fs.writeFileSync(OutputFile, html);    
  }
}); 

