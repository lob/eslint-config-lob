'use strict';

module.exports = {
  env: {
    "node": true
  },
  extends: "./index.js",
  rules: {
    "no-unused-vars": [2, { "argsIgnorePattern": "Promise" }]
  }
};
