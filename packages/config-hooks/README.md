# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

- husky

  ```sh
  npx husky install
  npm pkg set scripts.prepare="husky install"
  npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
  npx husky add .husky/pre-commit "npx --no lint-staged"
  ```

- lint-staged

  ```js
  // .lintstagedrc.js
  module.exports = {
    ...require('@alexlit/config-hooks/lint-staged'),
  };
  ```
