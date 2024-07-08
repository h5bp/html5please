'use strict';

const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function promptValue(tag, possibilities = [], multiple = false) {
  let possibilitiesStr = possibilities.length ? ' (' : '';
  if (multiple) {
    possibilitiesStr += 'one or more of: ';
  }

  possibilities.forEach((possibility, index) => {
    possibilitiesStr += possibility;
    if (index < possibilities.length - 1) {
      possibilitiesStr += ', ';
    }
  });
  possibilitiesStr += possibilities.length ? ')' : '';

  return readlineSync.question(`Enter ${tag}${possibilitiesStr}: `);
}

function writePost(feature, callback) {
  const slug = feature.name.replace(/ /g, '-').toLowerCase();
  const filename = `${slug}.md`;
  const fileContent = `
feature: ${feature.name}
status: ${feature.status}
tags: ${feature.tags}
kind: ${feature.kind}
polyfillurls:

...
`;

  const filepath = path.join('posts', filename);
  fs.writeFile(filepath, fileContent.trim(), (err) => {
    if (err) throw err;
    callback(filepath);
  });
}

const feature = {
  name: promptValue('Feature Name'),
  status: promptValue('Status', ['use', 'avoid', 'caution']),
  tags: promptValue('Tags', ['gtie6', 'gtie7', 'gtie8', 'prefixes', 'polyfill', 'fallback', 'none'], true),
  kind: promptValue('Type', ['css', 'html', 'js', 'api', 'svg'])
};

writePost(feature, (file) => {
  console.log(`Created file ${file}`);
  exec(`open ${file}`);
});
