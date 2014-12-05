/* global prettyDate */

(function(window, undefined) {
  'use strict';

  var request = function(url, cb) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
        var data = JSON.parse(req.responseText);
        cb(undefined, data);
      } else {
        cb('The server responded with an error');
      }
    };

    req.onerror = function() {
      cb('Something failed handling the AJAX request');
    };

    req.send();
  };

  request('//api.github.com/repos/h5bp/html5please/commits', function(error, data) {
    if (error) {
      throw error;
    }

    var date = prettyDate(data[0].commit.committer.date);
    document.getElementById('last-updated').innerHTML = 'Site last updated ' + date + '.';
  });

})(this);
