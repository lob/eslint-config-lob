'use strict';

var Fs        = require('fs');
var Bluebird  = require('bluebird');
var Changelog = Bluebird.promisify(require('conventional-changelog'));

var lastVersionSplit = require('../package.json').version.split('.');

if (process.argv[2] === '--major') {
  lastVersionSplit[0] = (parseInt(lastVersionSplit[0]) + 1).toString();
  lastVersionSplit[1] = '0';
  lastVersionSplit[2] = '0';
} else if (process.argv[2] === '--minor') {
  lastVersionSplit[1] = (parseInt(lastVersionSplit[1]) + 1).toString();
  lastVersionSplit[2] = '0';
} else {
  lastVersionSplit[2] = (parseInt(lastVersionSplit[2]) + 1).toString();
}

var newVersion = lastVersionSplit.join('.');

Changelog({
  repository: 'https://github.com/lob/eslint-config-lob',
  version: newVersion,
}, function (err, log) {
  Fs.writeFileSync('../CHANGELOG.md', log);
});
