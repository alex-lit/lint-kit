# Конфигурация StyleLint

## Установка

```sh
npm i @alexlit/config-stylelint -D
```

## Подключение

```js
// .stylelintrc.js
module.exports = {
  extends: ['@alexlit/config-stylelint'],

  ignoreFiles: [
    ...require('@alexlit/config-stylelint/.stylelintrc.js').ignoreFiles,
  ],
};
```
