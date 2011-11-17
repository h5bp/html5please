var fs = require('fs'),
    FeaturesData = "./features.json";
    
function update() {
  try {
    // Features data
    var Data = JSON.parse(fs.readFileSync("./features.json").toString());
    features.reset(Data);

    console.log("Features data updated. Rendering…");
  } catch(ex) {};
}

var app = require("./app");

var features = new app.Features();

var markup = new app.Markup({collection: features });

features.bind("reset", function() {
  markup.render();
});

fs.watchFile("./features.json", update);

// Kick off
update();
