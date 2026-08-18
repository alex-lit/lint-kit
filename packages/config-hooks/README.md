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
    { stylelint: false },

    // optional config
    {
      '*.css': [], // disable existing rule
      '*.yaml': ['echo "Hello, .yaml!"'], // custom rule
    },
  );
  ```

# Runner examples

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

- husky

  ```json
  // package.json
  { "scripts": { "prepare": "husky" } }
  ```

  ```sh
  npx husky init
  
  echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg
  echo 'npx --no lint-staged' > .husky/pre-commit
  ```

- git (native)

  ```json
  { "scripts": { "prepare": "git config core.hooksPath .githooks" } }
  ```

  ```sh
  # 1. Создаем нативную папку и привязываем её к Git
  mkdir -p .githooks && git config core.hooksPath .githooks
  
  # 2. Создаем хук pre-commit
  echo '#!/bin/sh' > .githooks/pre-commit
  echo 'npx --no -- lint-staged' >> .githooks/pre-commit
  
  # 3. Создаем хук commit-msg
  echo '#!/bin/sh' > .githooks/commit-msg
  echo 'npx --no -- commitlint --edit "$1"' >> .githooks/commit-msg
  
  # 4. Делаем файлы исполняемыми
  chmod +x .githooks/pre-commit .githooks/commit-msg
  ```
