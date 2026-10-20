# Prettier Configuration

## Установка

```sh
npm i @alexlit/config-prettier -D
```

## Подключение

Плагинов по умолчанию нет — подключайте нужные явно, вызывая соответствующие
фабрики:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.jsdoc(),
  plugins.mdc(),
  plugins.packageJson(),
  plugins.php(),
  plugins.pug(),
  plugins.ruby(),
  plugins.sh(),
  plugins.sortJson(),
  plugins.solidity(),
  plugins.sql(),
  plugins.tailwindcss(),
  plugins.xml(),
]);
```

### Опции плагина

Каждая фабрика принимает опции — они накладываются поверх значений по умолчанию
(shallow merge):

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.sortJson({ jsonRecursiveSort: false }),
  plugins.tailwindcss({ tailwindFunctions: ['cn', 'cva'] }),
]);
```

### Опции Prettier

Второй аргумент задаёт базовые опции Prettier — он имеет наивысший приоритет:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([plugins.php()], {
  printWidth: 100,
  singleQuote: false,
});
```

### Доступные фабрики

| Фабрика                 | Плагин                                            |
| ----------------------- | ------------------------------------------------- |
| `plugins.jsdoc()`       | `prettier-plugin-jsdoc`                           |
| `plugins.mdc()`         | `prettier-plugin-mdc`                             |
| `plugins.packageJson()` | `prettier-plugin-packagejson`                     |
| `plugins.php()`         | `@prettier/plugin-php`                            |
| `plugins.pug()`         | `@prettier/plugin-pug`                            |
| `plugins.ruby()`        | `@prettier/plugin-ruby` + `prettier-plugin-eruby` |
| `plugins.sh()`          | `prettier-plugin-sh`                              |
| `plugins.sortJson()`    | `prettier-plugin-sort-json`                       |
| `plugins.solidity()`    | `prettier-plugin-solidity`                        |
| `plugins.sql()`         | `prettier-plugin-sql`                             |
| `plugins.tailwindcss()` | `prettier-plugin-tailwindcss`                     |
| `plugins.xml()`         | `@prettier/plugin-xml`                            |

## Миграция с v23

v24 — breaking-релиз: плагинов по умолчанию больше нет, всё подключается явно.

| v23                            | v24                                           |
| ------------------------------ | --------------------------------------------- |
| `defineConfig()`               | перечислите нужные плагины явно               |
| `defineConfig({ php: true })`  | `defineConfig([plugins.php()])`               |
| `defineConfig({ sql: false })` | просто не добавляйте `plugins.sql()` в список |
| `defineConfig({}, options)`    | `defineConfig([...], options)`                |

Плагины, включённые по умолчанию в v23: `jsdoc`, `mdc`, `packagejson`, `pug`,
`sh`, `solidity`, `sort-json`, `xml`.

## Известные проблемы

- **tailwindcss** ранее конфликтовал с **jsdoc**
