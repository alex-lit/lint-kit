# Конфигурация ESLint

## Установка

```sh
npm i @alexlit/config-eslint -D
```

## Подключение

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/config-eslint'],
};
```

feat: vueДополнительные плагины:

```js
// .eslintrc.js
module.exports = {
  extends: ['./node_modules/@alexlit/config-eslint/configs/optional/vuetify'],
};
```
