'use strict';

var question = require('readline-sync').question;
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

function promptValue(tag, possibilities, morePossible) {
  possibilities = possibilities || [];
  morePossible = morePossible || false;

  var possibilitiesStr = possibilities.length ? ' (' : '';
  if(morePossible) {
    possibilitiesStr += 'one or more of: ';
  }

  possibilities.forEach(function(possibility) {
    // avoid trailing commas
    if( possibilities[ possibilities.length - 1] !== possibility ) {
      possibilitiesStr += possibility + ', ';
    }
    else {
      possibilitiesStr += possibility;
    }
  });
  possibilitiesStr += possibilities.length ? ')' : '';

  return question('Enter ' + tag + possibilitiesStr + ': ');
}

function writePost(feature, callback) {
  var slug = feature.name.replace(' ', '-').toLowerCase(),
      filename = slug + '.md',
      file = '';

  file += 'feature: ' + feature.name + '\n';
  file += 'status: ' + feature.status + '\n';
  file += 'tags: ' + feature.tags + '\n';
  file += 'kind: ' + feature.kind + '\n';
  file += 'polyfillurls:' + '\n';
  file += '\n';
  file += '...\n';

  var filepath = path.join('posts', filename);
  fs.writeFile(filepath, file, function() {
    callback(filepath);
  });
}

var feature = {
  name: promptValue('Feature Name'),
  status: promptValue('Status', ['use', 'avoid', 'caution']),
  tags: promptValue('Tags', ['gtie6', 'gtie7', 'gtie8', 'prefixes', 'polyfill', 'fallback', 'none'], true),
  kind: promptValue('Type', ['css', 'html', 'js', 'api', 'svg'])
};

writePost(feature, function(file) {
  console.log('Created file ' + file);
  exec('open ' + file);
});
