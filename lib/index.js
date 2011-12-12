var fs = require('fs');
    
function update() {
    //Stolen from Tim Branyen
}

// Require the internal application structures
var app = require("./app");

// Create new structures to fetch/render
var features = new app.Features();
var markup = new app.Markup({ collection: features });

// Reset is triggered whenever fetch happens
features.bind("reset", function() {
  markup.render();
});

// Kick off
features.fetch();
