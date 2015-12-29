'use strict';

var merge = require('lodash.merge');
var react = require('./react');

module.exports = merge({}, react, {
    parser: 'babel-eslint',

    env: {
        es6: true
    },

    ecmaFeatures: {
        modules: true
    }
});
