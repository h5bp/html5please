var fs = require('fs');
    
// Require the internal application structures
var app = require("./app");

// Create new structures to fetch/render
var features = new app.Features();
var markup = new app.Markup({ collection: features });

// Process arguments
var myArgs = process.argv.slice(2);

// Reset is triggered whenever fetch happens
features.bind("reset", function() {
  //triggered by 'node . checkurls'
  if(myArgs[0] == 'checkurls') {    
    markup.updateurls(function() { markup.render(); });
   } else {
     markup.render();
   }
});

// Kick off
features.fetch();
