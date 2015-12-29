'use strict';

module.exports = {
  env: {
    "node": true
  },
  extends: "./index.js",
  rules: {
    "no-shadow": [2, {
      "builtinGlobals": true,
      "hoist": "all",
      "allow": ["Promise"]
    }],
    "no-unused-vars": [2, { "argsIgnorePattern": "Promise" }]
  }
};
