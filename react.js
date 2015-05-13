'use strict';

var merge = require('lodash.merge');
var baseConfig = require('./index');

var reactConfig = {
    'plugins': [
        'react'
    ],
    'ecmaFeatures': {
        'jsx': true
    },
    'rules': {
        'react/jsx-boolean-value': 2,
        'react/jsx-quotes': [2, 'double', 'avoid-escape'],
        'react/jsx-no-undef': 2,
        'react/jsx-sort-props': 0,
        'react/jsx-uses-react': 2,
        'react/jsx-uses-vars': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-multi-comp': 2,
        'react/no-unknown-property': 2,
        'react/prop-types': 2,
        'react/react-in-jsx-scope': 2,
        'react/self-closing-comp': 2,
        'react/wrap-multilines': 2
    }
};

module.exports = merge({}, baseConfig, reactConfig);
