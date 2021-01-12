#Lint Kit

Пресет конфигурационных файлов и зависимостей для линтинга `vue.js` приложений

##Установка

```sh
npm i @alexlit/lint-kit -D
```

## Подключение

### Prettier

```js
// .prettierrc.js
module.exports = {
  ...require('@alexlit/lint-kit/.prettierrc.js'),
};
```

### ESLint

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/lint-kit/.eslintrc.js'],
};
```

### StyleLint

```js
// .stylelintrc.js
module.exports = {
  extends: ['@alexlit/lint-kit/.stylelintrc.js'],
};
```

### MarkdownLint

```json
// .markdownlint.json
{
  "extends": "./node_modules/@alexlit/config-markdownlint/.markdownlint.json"
}
```

### CommitLint

```js
// .commitlintrc.js
module.exports = {
  extends: ['@alexlit/lint-kit/.commitlintrc.js'],
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
  "*.{vue,pcss,scss,sass,css}": "stylelint --fix",
  "*.{md}": "markdownlint --fix"
},
```
