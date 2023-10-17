# Lint Kit

Preset of configuration files and dependencies for linting web applications
(designed for [Vue.js](https://vuejs.org) with
[TypeScript](https://www.typescriptlang.org/))

## Installation

```sh
npm i @alexlit/lint-kit -D
```

## Connection

### [Prettier](https://github.com/alex-lit/config-prettier)

`.prettierrc.js`:

```js
module.exports = {
  ...require('@alexlit/lint-kit/.prettierrc'),
};
```

### [ESLint](https://github.com/alex-lit/config-eslint)

`.eslintrc.js`:

```js
module.exports = {
  extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],
};
```

### [StyleLint](https://github.com/alex-lit/config-stylelint)

`.stylelintrc.js`:

```js
module.exports = {
  extends: ['@alexlit/lint-kit/.stylelintrc.js'],

  ignoreFiles: [...require('@alexlit/lint-kit/.stylelintrc').ignoreFiles],
};
```

### [HTMLLint](https://github.com/alex-lit/config-htmllint)

`.linthtmlrc.js`:

```js
module.exports = {
  ...require('@alexlit/lint-kit/.linthtmlrc'),
};
```

### [MarkdownLint](https://github.com/alex-lit/config-markdownlint)

`.markdownlintrc.js`:

```js
module.exports = {
  ...require('@alexlit/lint-kit/.markdownlintrc'),
};
```

### [NPMLint](https://github.com/tclindner/npm-package-json-lint)

`.npmpackagejsonlintrc.json`:

```json
{
  "extends": "@alexlit/lint-kit/.npmpackagejsonlintrc.json"
}
```

### [CommitLint](https://github.com/alex-lit/config-commitlint)

`.commitlintrc.js`:

```js
module.exports = {
  extends: ['@alexlit/lint-kit/.commitlintrc.js'],
};
```

`.huskyrc.js`:

```js
module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
};
```

## Recipes

### Automatic launch linters and code fixes on commit

`.lintstagedrc.js`:

```js
module.exports = {
  ...require('@alexlit/lint-kit/.lintstagedrc'),
};
```

`.huskyrc.js`:

```js
module.exports = {
  ...require('@alexlit/lint-kit/.huskyrc'),
};
```

### Launching linters manually

`package.json`:

```json
"scripts": {
  "lint": "./node_modules/@alexlit/lint-kit/scripts/lint.sh",
  "lint:eslint": "./node_modules/@alexlit/lint-kit/scripts/lint.eslint.sh",
  "lint:htmllint": "./node_modules/@alexlit/lint-kit/scripts/lint.htmllint.sh",
  "lint:markdownlint": "./node_modules/@alexlit/lint-kit/scripts/lint.markdownlint.sh",
  "lint:npmlint": "./node_modules/@alexlit/lint-kit/scripts/lint.npmlint.sh",
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

`.npmrc`:

```ini
globalconfig="./node_modules/@alexlit/lint-kit/.npmrc"
```

`package.json`:

```json
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
