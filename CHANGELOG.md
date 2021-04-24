### 5.2.0 (2021-04-24)

##### Bug Fixes

* **eslint-peer-dependency:**  Version 5.1 intended to create lenient rules for 'eslint' as a peer (major versions 4-7). This change actually does that. ([0732c16d](https://github.com/lob/eslint-config-lob/commit/0732c16ddad6133cb5ce737fd5c33294d88e9d05))

### 5.1.0 (2021-04-24) [DEPRECATED]

* ~~**eslint:** Allow newer versions of eslint, and update syntax to work with major versions 4-7. (#33) ([bb3ec96](https://github.com/lob/eslint-config-lob/commit/bb3ec9655d5c187e87e334c65660a50618dedf4d))~~

##### Chores

* **deps:**  bump lodash from 4.17.15 to 4.17.19 ([e50e3bb6](https://github.com/lob/eslint-config-lob/commit/e50e3bb6954c767c765bb6402d92d98eaaf9ebbf))

##### Deprecation notes

* This version attempted to allow eslint versions 4-7 as peer dependency. Due to a syntax mistake, it does not actually do so. Please use version 5.2.0 instead.

### 5.0.0 (2020-07-24)

* **mixed &&s and ||s** change rules to disallow mixing operators.  Since this rule cannot be auto-fixed, this is a breaking change.

### 4.2.0 (2020-07-09)

##### Chores

* **indent:**  change indentation of "dot" chains ([4048ece](https://github.com/lob/eslint-config-lob/commit/4048ece7ce4ce483e9eccdc643fedc8e06f2327c))

### 4.1.0 (2020-03-04)

##### Chores

* **align-equals:**  removing equal alignment to modernize rules ([7ab1c67e](https://github.com/lob/eslint-config-lob/commit/7ab1c67ee78328898bacbfe1c638a3123f769570))

## 4.0.0 (2018-05-11)

##### New Features

* **config:**  enable no-new-func in error mode ([3245475f](https://github.com/lob/eslint-config-lob/commit/3245475f419f35ad41a100d0b962a8d5f24bb464))

## 3.0.0 (2017-11-13)

##### Chores

* **eslint:** upgrade eslint to 4.x.x and update rule names (#22) ([5137b9cb](https://github.com/lob/eslint-config-lob/commit/5137b9cb25f88d549ad2aa4d7e720e3d365865c6))

### 2.4.0 (2016-11-11)

##### New Features

* **browser:** upgrade to ES6 rules ([df48b84d](https://github.com/lob/eslint-config-lob/commit/df48b84dc66b360024828ebe82e1d91f792c53c8))

### 2.3.0 (2016-8-31)

##### Chores

* **npm:** remove shrinkwrap file ([7771eec1](https://github.com/lob/eslint-config-lob/commit/7771eec10660486b5c5b6ba5889f29de21a22ec7))

##### New Features

* **plugin:** add eslint-plugin-lob ([c67d3985](https://github.com/lob/eslint-config-lob/commit/c67d3985641943c1c05f74cca5b9fbbd8d50bc61))

##### Bug Fixes

* **config:** use correct extends syntax ([8e96a902](https://github.com/lob/eslint-config-lob/commit/8e96a9027b851ce2dbd6148f61a0df9142977029))
* **key-spacing:** use strict mode ([e696fcec](https://github.com/lob/eslint-config-lob/commit/e696fcec1424e1d2311276112a51bb7efaecbefc))

##### Refactors

* **config:** move common rules to base config file ([b7c59cea](https://github.com/lob/eslint-config-lob/commit/b7c59ceafc7a0ef3a7fb39aeceee3dacd62ecc7a))

### 2.2.0 (2016-6-29)

##### Bug Fixes

* **rules:** enable semi and comma-spacing ([6e6bbeb3](https://github.com/lob/eslint-config-lob/commit/6e6bbeb3))

### 2.1.0 (2016-6-10)

##### New Features

* **es5:** add rule set for es5 for older repos ([af53f573](https://github.com/lob/eslint-config-lob/commit/af53f573))

##### Bug Fixes

* **max-lines:** reduce it from 2 to 1 ([b27957e0](https://github.com/lob/eslint-config-lob/commit/b27957e0))

#### 2.0.1 (2016-5-5)

##### Bug Fixes

* **arrow-body-style:** remove the buggy rule ([5a19e0c6](https://github.com/lob/eslint-config-lob/commit/5a19e0c6))

## 2.0.0 (2016-2-11)

##### Bug Fixes

* **object-shorthand:** only enable it for properties ([7610c8e0](https://github.com/lob/eslint-config-lob/commit/7610c8e0))
* **env:** enable es6 env ([46c098a1](https://github.com/lob/eslint-config-lob/commit/46c098a1))
* **typo:** fix typo in config ([2bc3121e](https://github.com/lob/eslint-config-lob/commit/2bc3121e))
* **changelog:** use generate-changelog ([505dd9a9](https://github.com/lob/eslint-config-lob/commit/505dd9a9))

##### Chores

* **style:** use single quotes in rule configuration ([d495cde6](https://github.com/lob/eslint-config-lob/commit/d495cde6))

##### New Features

* **main:** enable all es6 rules ([39bcb398](https://github.com/lob/eslint-config-lob/commit/39bcb398))
* **browser:** create separate rules for browser env ([41a9f1e2](https://github.com/lob/eslint-config-lob/commit/41a9f1e2))
* **rules:**
  * add best practices rules ([9b2fa820](https://github.com/lob/eslint-config-lob/commit/9b2fa820))
  * enable all recommended rules ([e05f1cd8](https://github.com/lob/eslint-config-lob/commit/e05f1cd8))
* **readme:** document usage and contribution ([528eb310](https://github.com/lob/eslint-config-lob/commit/528eb310))

#### 1.0.1 (2015-11-07)

##### New Features

* **publish:** prepare for publishing ([6ec3f0d](https://github.com/lob/eslint-config-lob/commit/6ec3f0d))
* **rules:** initial rules ([4fc3e61](https://github.com/lob/eslint-config-lob/commit/4fc3e61))
