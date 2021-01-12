# Lint Kit

Пресет конфигурационных файлов и зависимостей для линтинга `vue.js` приложений

## Установка

```sh
npm i @alexlit/lint-kit -D
```

## Подключение

- Prettier

  ```js
  // .prettierrc.js
  module.exports = {
    ...require('@alexlit/lint-kit/.prettierrc.js'),
  };
  ```

- ESLint

  ```js
  // .eslintrc.js
  module.exports = {
    extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],
  };
  ```

- StyleLint

  ```js
  // .stylelintrc.js
  module.exports = {
    extends: ['@alexlit/lint-kit/.stylelintrc.js'],

    ignoreFiles: [...require('@alexlit/lint-kit/.stylelintrc.js').ignoreFiles],
  };
  ```

- MarkdownLint

  ```json
  // .markdownlint.json
  {
    "extends": "./node_modules/@alexlit/lint-kit/.markdownlint.json"
  }
  ```

- CommitLint

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

## Рецепты

### Aвтоматический запуск линтеров и исправление кода при коммите

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

### Запуска линтеров вручную

```json
// package.json
"scripts": {
  "lint": "./node_modules/@alexlit/lint-kit/scripts/lint.sh",
  "lint:eslint": "./node_modules/@alexlit/lint-kit/scripts/lint.eslint.sh",
  "lint:markdownlint": "./node_modules/@alexlit/lint-kit/scripts/lint.markdownlint.sh",
  "lint:stylelint": "./node_modules/@alexlit/lint-kit/scripts/lint.stylelint.sh",
},
```

### Публикация пакета

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

```bash
npm run up # Обновляет зависимости
npm run semver <patch | minor | major> # Обновляет версию пакета
npm publish # Публикует пакет в npm-репозиторий
```
