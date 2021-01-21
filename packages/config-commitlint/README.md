# Конфигурация CommitLint

Линтит сообщение коммита а также прогоняет через линтеры код и не дает
закоммитить если будут найдены ошибки

## Установка

```sh
npm i @alexlit/config-commitlint -D
```

## Подключение

```js
// .commitlintrc.js
module.exports = {
  extends: ['@alexlit/config-commitlint'],
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
