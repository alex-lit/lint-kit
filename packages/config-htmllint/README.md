# HTMLLint Configuration

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-htmllint)](https://www.npmjs.com/package/@alexlit/config-htmllint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-htmllint)](https://npmx.dev/package/@alexlit/config-htmllint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-htmllint)](LICENSE)

Готовая конфигурация [linthtml](https://github.com/linthtml/linthtml) - линтера
HTML-разметки. Пакет объединяет рекомендованный базовый конфиг
`@linthtml/linthtml-config-recommended` с дополнительными правилами (в том числе
проверками доступности и стиля разметки), чтобы подключить линтер одной строкой
и не держать сотни строк настроек в каждом проекте.

## Установка

```bash
npm i @alexlit/config-htmllint -D
```

## Быстрый старт

```js
// linthtml.config.js
import { defineConfig } from '@alexlit/config-htmllint';

export default defineConfig();
```

Готово: подключены рекомендованный конфиг, правила пакета и дефолтные опции
линтера.

## Настройка

Аргумент `options` накладывается поверх значений по умолчанию: `rules` - shallow
merge, `extends` и `ignoreFiles` - конкатенация.

```js
// linthtml.config.js
import { defineConfig } from '@alexlit/config-htmllint';

export default defineConfig({
  'line-max-len-ignore-regex': false,

  'rules': { 'indent-width': [true, 4], 'title-max-len': [true, 60] },
});
```

## Миграция v1 → v2

v2 - breaking-релиз: функция переименована для консистентности с остальными
пакетами `@alexlit/config-*`.

| v1                   | v2                   |
| -------------------- | -------------------- |
| `createConfig()`     | `defineConfig()`     |
| `createConfig(opts)` | `defineConfig(opts)` |

Аргументы и их поведение не изменились - достаточно заменить имя функции.

## Расширение для VSCode

[vscode-linthtml](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-linthtml)

## Полезные ссылки

- [linthtml](https://github.com/linthtml/linthtml)
- [linthtml-config-recommended](https://github.com/linthtml/linthtml-config-recommended)
