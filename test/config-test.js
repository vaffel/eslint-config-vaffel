'use strict';

var assert = require('assert');
var config = require('../');
var reactConfig = require('../react');
var reactEsConfig = require('../react-es6');

// Ensure that the config has some expected values
assert.equal(config.env.node, true);
assert.equal(config.rules.yoda, 2);

// Ensure we don't have any react rules in the base config
assert(typeof config.rules['react/jsx-boolean-value'] === 'undefined');
assert.equal((config.plugins || []).indexOf('react'), -1);

// Ensure the React config extends the base config
assert.equal(reactConfig.env.node, true);
assert.equal(reactConfig.rules.yoda, 2);

// Ensure the React config specifies React rules, JSX and React plugin
assert(reactConfig.rules['react/jsx-boolean-value'], 2);
assert((reactConfig.plugins || []).indexOf('react') > -1);
assert(reactConfig.ecmaFeatures.jsx);

// Ensure the React ES6 config specifies both React rules, and babel/ES6 stuff
assert(reactEsConfig.rules['react/jsx-boolean-value'], 2);
assert(reactEsConfig.parser === 'babel-eslint');
assert(reactEsConfig.env.es6);
assert(reactEsConfig.ecmaFeatures.modules);
