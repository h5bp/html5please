var Backbone = require("backbone");

var fs = require('fs');

var Handlebars = require('handlebars');

var OutputFile = "./index.html";

var TemplateFile = "./template.html";

Backbone.View.prototype._ensureElement = function() {};


exports.Feature = Backbone.Model.extend({  
});



exports.Features = Backbone.Collection.extend({
  model: exports.Feature
});




exports.Markup = Backbone.View.extend({
  initialize: function() {
    var source = fs.readFileSync(TemplateFile).toString();
    this.template = Handlebars.compile(source);    
  },
  
  render: function() {
    console.log("rendering…");
    console.log(this.collection);
    var html = this.template({ "features": this.collection.toJSON()});
    fs.writeFileSync(OutputFile, html);    
  }
}); 

