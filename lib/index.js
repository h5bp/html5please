module.exports = exports = function(task) {
  // Require the internal application structures
  var app = require('./app');

  // Create new structures to fetch/render
  var features = new app.Features();
  var markup = new app.Markup({ collection: features });

  // Reset is triggered whenever fetch happens
  features.on('reset', function() {
    // triggered by 'node . checkurls'
    if (task === 'checkurls') {
      markup.updateurls(function() { markup.render(); });
    } else if (task === 'render') {
      markup.render();
    }
  });

  // Kick off
  features.fetch();
};
