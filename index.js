'use strict';

var path = require('path');
var fs = require('fs');

var content = fs.readFileSync(path.join(__dirname, '.eslintrc'), 'utf8');
var config = JSON.parse(content);

module.exports = config;
