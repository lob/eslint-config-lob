# eslint-config-lob

[Shareable ESLint configuration](http://eslint.org/docs/developer-guide/shareable-configs) for Lob repositories

## Usage

1. Install `eslint` and this module:
  ```bash
  npm i eslint eslint-config-lob --save-dev
  ```

2. Create an `.eslintrc` file in the root of your project with the following object:
  ```js
  {
    extends: "eslint-config-lob"
  }
  ```

  This will use the rules in eslint-config-lob's [`index.js`](https://github.com/lob/eslint-config-lob/blob/master/index.js). You can access rules in files other than eslint-config-lob's [`index.js`](https://github.com/lob/eslint-config-lob/blob/master/index.js) via:
  ```js
  {
    extends: "eslint-config-lob/migrations"
  }
  ```
3. Use an `.eslintignore` file to specify files or directories that the linter should ignore. By default, eslint ignores the `node_modules` directory.
4. Modify or create the npm `lint` script in the package.json to:
  ```json
  {
    "scripts": {
      "lint": "eslint ."
    }
  }

  ```
  This will lint every `.js` file in your project.

5. Clean up any old lint or style tasks and config from your project.
6. Don't forget to shrinkwrap before you commit your changes.

## Contributing

Modifying or adding [rules](http://eslint.org/docs/rules/).
  * To add to the main rules, modify the [`index.js`](https://github.com/lob/eslint-config-lob/blob/master/index.js) file.
  * To use most of the main rules but override some of them, create a new file in the root of this module, extend from [`index.js`](https://github.com/lob/eslint-config-lob/blob/master/index.js) and add your overrides. See [`migrations.js`](https://github.com/lob/eslint-config-lob/blob/master/migrations.js) for an example. If you're creating a file like this, its rules should be reusable and not a one-off. For example, you could create a file for angular rules. To make a one-off change, do so in your project's `.eslintrc`.

