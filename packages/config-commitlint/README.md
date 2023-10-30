# CommitLint Configuration

Lines the commit message and also runs the code through the linters and does not
pass commit if errors are found

## Installation

```sh
npm i @alexlit/config-commitlint -D
```

## Connection

```js
// .commitlintrc.js
module.exports = {
  extends: ['@alexlit/config-commitlint'],
};
```

```js
// .huskyrc.js
module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
```
