var fs = require('fs');
    
function update() {
  try {
    // Features data
    var Data = [];
    fs.readdir('./posts', function(err, files) {
      files.filter(function(file) { return file.substr(-3); }).forEach(function(file) { 
        fs.readFile('./posts/' + file, 'utf-8', function(err, contents) {  
          parser(contents); 
        });
      });
    });
    //Stolen from Tim Branyen
    parser = function(contents) {
      var i, len, parts, key, val;
         var obj = { metadata: {}, contents: "" };
         var docs = contents.split("\n\n");
         var lines = docs[0].split("\n");

         for (i = 0, len = lines.length; i < len; i++) {
           parts = lines[i].trim().split(":");
           
           if (parts.length < 2) {
             throw new Error("Invalid key: val");
           }

           key = parts[0];
           val = parts.slice(1).join(":");


           obj.metadata[key] = "" + val;
         }

         obj.contents = docs.slice(1).join("\n\n");  

         Data.push(obj);          
    }
        
    features.reset(Data); //  Y U NO WORK?

  } catch(ex) {};
}

var app = require("./app");

var features = new app.Features();

var markup = new app.Markup({collection: features });

features.bind("reset", function() {
  markup.render();
});

// Kick off
update();