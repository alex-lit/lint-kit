# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

- lint-staged

  ```js
  // lint-staged.config.js
  import { createLintStagedConfig } from '@alexlit/config-hooks';

  export default createLintStagedConfig(
    // optional plugins list
    {
      stylelint: false,
    },

    // optional config
    {
      '*.css': [], // disable existing rule
      '*.yaml': ['echo "Hello, .yaml!"'], // custom rule
    },
  );
  ```

- husky

  ```sh
  npx husky init
  
  echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg
  echo 'npx --no lint-staged' > .husky/pre-commit
  ```
