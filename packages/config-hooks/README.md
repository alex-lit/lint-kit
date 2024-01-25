# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

- husky

  ```sh
  npx husky init
  
  echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg
  echo 'npx --no lint-staged' > .husky/pre-commit
  ```

- lint-staged

  ```js
  // .lintstagedrc.js
  module.exports = {
    ...require('@alexlit/config-hooks/lint-staged'),
  };
  ```
