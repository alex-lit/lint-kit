# Lint Kit

Preset of configuration files and dependencies for linting web applications
(designed for [Vue.js](https://vuejs.org) with
[TypeScript](https://www.typescriptlang.org/))

## Installation

```sh
npm i @alexlit/lint-kit -D
```

## Connection

- [Prettier](https://github.com/alex-lit/config-prettier)

  ```js
  // .prettierrc.js
  module.exports = {
    ...require('@alexlit/lint-kit/.prettierrc.js'),
  };
  ```

- [ESLint](https://github.com/alex-lit/config-eslint)

  ```js
  // .eslintrc.js
  module.exports = {
    extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],
  };
  ```

- [StyleLint](https://github.com/alex-lit/config-stylelint)

  ```js
  // .stylelintrc.js
  module.exports = {
    extends: ['@alexlit/lint-kit/.stylelintrc.js'],

    ignoreFiles: [...require('@alexlit/lint-kit/.stylelintrc.js').ignoreFiles],
  };
  ```

- [HTMLLint](https://github.com/alex-lit/config-htmllint)

  ```js
  // .linthtmlrc.js
  module.exports = {
    ...require('@alexlit/lint-kit/.linthtmlrc.js'),
  };
  ```

- [MarkdownLint](https://github.com/alex-lit/config-markdownlint)

  ```js
  // .markdownlintrc.js
  module.exports = {
    ...require('@alexlit/lint-kit/.markdownlintrc.js'),
  };
  ```

- [CommitLint](https://github.com/alex-lit/config-commitlint)

  ```js
  // .commitlintrc.js
  module.exports = {
    extends: ['@alexlit/lint-kit/.commitlintrc.js'],
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

## Recipes

### Automatic launch linters and code fixes on commit

```js
// .lintstagedrc.js
module.exports = {
  ...require('@alexlit/lint-kit/.lintstagedrc.js'),
};
```

```js
// .huskyrc.js
module.exports = {
  ...require('@alexlit/lint-kit/.huskyrc.js'),
};
```

### Launching linters manually

```json
// package.json
"scripts": {
  "lint": "./node_modules/@alexlit/lint-kit/scripts/lint.sh",
  "lint:eslint": "./node_modules/@alexlit/lint-kit/scripts/lint.eslint.sh",
  "lint:htmllint": "./node_modules/@alexlit/lint-kit/scripts//lint.htmllint.sh",
  "lint:markdownlint": "./node_modules/@alexlit/lint-kit/scripts/lint.markdownlint.sh",
  "lint:stylelint": "./node_modules/@alexlit/lint-kit/scripts/lint.stylelint.sh",
},
```

```sh
# lint
npm run lint
# autofix errors
npm run lint fix
```

### Publishing a package

```ini
# .npmrc
globalconfig="./node_modules/@alexlit/lint-kit/.npmrc"
```

```json
// package.json
"scripts": {
  "publish": "./node_modules/@alexlit/lint-kit/scripts/publish.sh",
  "semver": "./node_modules/@alexlit/lint-kit/scripts/semver.sh",
  "up": "./node_modules/@alexlit/lint-kit/scripts/up.sh",
  "version": "./node_modules/@alexlit/lint-kit/scripts/version.sh"
},
```

```sh
npm run up # Updates dependencies
npm run semver <patch | minor | major> # Updates package version
npm publish # Publishes a package to npm repository
```
