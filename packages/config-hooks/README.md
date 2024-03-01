# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

- lint-staged

  ```js
  // lint-staged.config.js
  import { lintStagedConfig } from '@alexlit/config-hooks';

  export default {
    ...lintStagedConfig,
  };
  ```

- husky

  ```sh
  npx husky init
  
  echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg
  echo 'npx --no lint-staged' > .husky/pre-commit
  ```
