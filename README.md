# Lint Kit

Пресет конфигурационных файлов и зависимостей для линтинга `vue.js` приложений

## Установка

```sh
npm i @alexlit/lint-kit/lint-kit -D
```

## Подключение

- Prettier

  ```js
  // .prettierrc.js
  module.exports = {
    ...require('@alexlit/lint-kit/lint-kit/.prettierrc.js'),
  };
  ```

- ESLint

  ```js
  // .eslintrc.js
  module.exports = {
    extends: ['./node_modules/@alexlit/lint-kit/lint-kit/.eslintrc.js'],
  };
  ```

- StyleLint

  ```js
  // .stylelintrc.js
  module.exports = {
    extends: ['@alexlit/lint-kit/lint-kit/.stylelintrc.js'],
  };
  ```

- MarkdownLint

  ```json
  // .markdownlint.json
  {
    "extends": "./node_modules/@alexlit/lint-kit/config-markdownlint/.markdownlint.json"
  }
  ```

- CommitLint

  ```js
  // .commitlintrc.js
  module.exports = {
    extends: ['@alexlit/lint-kit/lint-kit/.commitlintrc.js'],
  };
  ```

  ```json
  // package.json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  ```

## Рецепты

### Aвтоматическbq линтинг и исправление кода при коммите

- Добавьте в `package.json` конфигурацию:

  ```json
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
    }
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{vue,pcss,scss,sass,css}": [
      "stylelint --fix",
      "prettier --write"
    ],
    "*.{md}": [
      "markdownlint --fix",
      "prettier --write"
    ]
  },
  ```

### Запуска линтинга вручную

- Добавьте скрипты в `package.json`:

  ```json
  "scripts": {
    "lint": "./node_modules/@alexlit/lint-kit/scripts/lint.sh",
    "lint:eslint": "./node_modules/@alexlit/lint-kit/scripts/lint.eslint.sh",
    "lint:markdownlint": "./node_modules/@alexlit/lint-kit/scripts/lint.markdownlint.sh",
    "lint:stylelint": "./node_modules/@alexlit/lint-kit/scripts/lint.stylelint.sh",
  },
  ```

### Публикация пакета

- Создайте в корне файл `.npmrc`:

  ```ini
  tag-version-prefix="v"
  message="chore(release): %s :tada:"
  ```

- Добавьте в `package.json`:

  ```json
  "scripts": {
    "publish": "./node_modules/@alexlit/lint-kit/scripts/publish.sh",
    "semver": "./node_modules/@alexlit/lint-kit/scripts/semver.sh",
    "up": "./node_modules/@alexlit/lint-kit/scripts/up.sh",
    "version": "./node_modules/@alexlit/lint-kit/scripts/version.sh"
  },
  ```

- Выполните команды:

  ```bash
  npm run up # Обновляет зависимости
  npm run semver <patch|minor|major> # Обновляет версию пакета
  npm publish # Публикует пакет в npm-репозиторий
  ```
