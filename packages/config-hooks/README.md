# Hooks Configuration

## Installation

```sh
npm i @alexlit/config-hooks -D
```

## Connection

- commitlint

  ```js
  // commitlint.config.js
  export default { extends: ['@alexlit/config-hooks/commitlint'] };
  ```

- lint-staged

  ```js
  // lint-staged.config.js
  import { createLintStagedConfig } from '@alexlit/config-hooks';

  export default createLintStagedConfig(
    // optional plugins list
    { stylelint: false },

    // optional config
    {
      '*.css': [], // disable existing rule
      '*.yaml': ['echo "Hello, .yaml!"'], // custom rule
    },
  );
  ```

- simple-git-hooks

  ```json
  // package.json
  {
    "scripts": { "prepare": "simple-git-hooks" },
    "simple-git-hooks": {
      "commit-msg": "npx commitlint --edit",
      "pre-commit": "npx lint-staged"
    }
  }
  ```

  ```sh
  npx simple-git-hooks
  ```
