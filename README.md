# Lint Kit

Пресет конфигурационных файлов и зависимостей для линтинга `vue.js` приложений

## Установка

```sh
npm i @alexlit/lint-kit -D
```

## Подключение

### ESLint

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],
};
```

### Prettier

```js
// .prettierrc.js
module.exports = {
  ...require('@alexlit/lint-kit/.prettierrc.js'),
};
```

### StyleLint

```js
// .stylelintrc.js
module.exports = {
  extends: ['@alexlit/lint-kit/.stylelintrc.js'],
};
```

### CommitLint

```js
// .commitlintrc.js
module.exports = {
  extends: ['@alexlit/lint-kit/.commitlintrc.js'],
};
```

Добавьте в `package.json` конфигурацию:

```json
// package.json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
},
```

Для автоматического линтинга и исправления кода при коммите добавьте в
`package.json` конфигурацию:

```json
// package.json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
  }
},
"lint-staged": {
  "*.{js,ts,vue}": "eslint --fix",
  "*.{vue,pcss,scss,sass,css}": "stylelint --fix"
},
```

## Разработка

Установите зависимости

```sh
npm i
```

Настройте конфигурационные файлы в соответствии с документацией

- [commitlint](https://github.com/alex-lit/config-commitlint)
- [eslint](https://github.com/alex-lit/config-eslint)
- [prettier](https://github.com/alex-lit/config-prettier)
- [stylelint](https://github.com/alex-lit/config-stylelint)
