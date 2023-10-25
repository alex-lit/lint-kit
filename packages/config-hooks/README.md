# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

```js
// .huskyrc.js
module.exports = {
  ...require('@alexlit/config-hooks/husky'),
};
```

```js
// ..lintstagedrc.js
module.exports = {
  ...require('@alexlit/config-hooks/lint-staged'),
};
```
