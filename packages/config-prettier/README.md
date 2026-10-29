# Prettier Configuration

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-prettier)](https://www.npmjs.com/package/@alexlit/config-prettier)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-prettier)](https://npmx.dev/package/@alexlit/config-prettier)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-prettier)](LICENSE)

Готовая конфигурация [Prettier](https://prettier.io/) с плагинами для
форматирования языков и форматов, которых Prettier не поддерживает из коробки
(PHP, SQL, шаблоны, shell-скрипты и т.д.), а также расширений для сортировки
JSON и утилит Tailwind CSS. Вместо того чтобы подключать и настраивать каждый
плагин вручную, соберите конфигурацию из готовых модулей.

Плагины модульные: по умолчанию ничего не включено - вы сами перечисляете нужные
в `defineConfig`.

## Установка

```bash
npm i @alexlit/config-prettier -D
```

## Быстрый старт

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([plugins.packageJson(), plugins.xml()]);
```

## Пример скриптов для package.json

```json
{ "scripts": { "lint:format": "prettier . --check --write" } }
```

Каждый вызов `plugins.*()` - отдельный плагин. Добавьте только то, что нужно
проекту; полный список - в разделе [Плагины](#плагины).

Больше плагинов - просто допишите их в массив:

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

## Настройка

### Настройки конкретного плагина

Чтобы переопределить настройки одного плагина, передайте объект в его вызов:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.sortJson({ jsonRecursiveSort: false }),
  plugins.tailwindcss({ tailwindFunctions: ['cn', 'cva'] }),
]);
```

Скалярные опции заменяют значения плагина, а `plugins` и `overrides` дополняют
дефолтные списки. Подробнее - в разделе
[Приоритет настроек](#приоритет-настроек).

### Общие настройки Prettier

Второй аргумент `defineConfig` - общие опции Prettier. Он перебивает настройки
всех плагинов:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([plugins.php()], {
  printWidth: 100,
  singleQuote: false,
});
```

### Приоритет настроек

Настройки применяются в таком порядке:

1. Базовые опции пакета.
2. Конфиги плагинов в порядке массива `defineConfig`.
3. Второй аргумент `defineConfig`.

Скалярные опции перекрывают друг друга. Коллекции `plugins` и `overrides`
дополняются, а не заменяются. `plugins` дедуплицируются, поэтому один и тот же
плагин можно безопасно указать несколько раз.

Для `overrides` более позднее правило выигрывает: пользовательские overrides
идут после дефолтных и перекрывают их при совпадении `files`.

### Правила для отдельных файлов

`overrides` из фабрики добавляются к дефолтным. Например, чтобы форматировать
документацию как обычный Markdown, оставив MDC для остальных файлов:

```js
// prettier.config.js
import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.mdc({
    overrides: [{ files: ['docs/**/*.md'], options: { parser: 'markdown' } }],
  }),
]);
```

Пустой массив `overrides: []` не отключает дефолтные правила. Чтобы
переопределить поведение, добавьте свой override с теми же `files` - он будет
применён после дефолтного.

## Плагины

| Плагин                  | Что делает                                      | Пакет                                                                                                                                            |
| ----------------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plugins.jsdoc()`       | Нормализует JSDoc-комментарии                   | [`prettier-plugin-jsdoc`](https://github.com/hosseinmd/prettier-plugin-jsdoc)                                                                    |
| `plugins.mdc()`         | Форматирует MDC-документы (Nuxt Content)        | [`prettier-plugin-mdc`](https://github.com/so1ve/prettier-plugin-mdc)                                                                            |
| `plugins.packageJson()` | Сортирует ключи в package.json                  | [`prettier-plugin-packagejson`](https://github.com/matzkoh/prettier-plugin-packagejson)                                                          |
| `plugins.php()`         | Форматирует PHP-файлы                           | [`@prettier/plugin-php`](https://github.com/prettier/plugin-php)                                                                                 |
| `plugins.pug()`         | Форматирует Pug-шаблоны с сортировкой атрибутов | [`@prettier/plugin-pug`](https://github.com/prettier/plugin-pug)                                                                                 |
| `plugins.ruby()`        | Форматирует Ruby и ERB файлы                    | [`@prettier/plugin-ruby`](https://github.com/prettier/plugin-ruby) + [`prettier-plugin-eruby`](https://github.com/ippachi/prettier-plugin-eruby) |
| `plugins.sh()`          | Форматирует shell-скрипты                       | [`prettier-plugin-sh`](https://github.com/astorije/prettier-plugin-sh)                                                                           |
| `plugins.sortJson()`    | Рекурсивно сортирует ключи JSON-объектов        | [`prettier-plugin-sort-json`](https://github.com/Gudahtt/prettier-plugin-sort-json)                                                              |
| `plugins.solidity()`    | Форматирует контракты Solidity                  | [`prettier-plugin-solidity`](https://github.com/prettier-solidity/prettier-plugin-solidity)                                                      |
| `plugins.sql()`         | Форматирует SQL-запросы                         | [`prettier-plugin-sql`](https://github.com/un-ts/prettier/tree/master/packages/sql)                                                              |
| `plugins.tailwindcss()` | Сортирует утилитарные классы Tailwind CSS       | [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)                                                     |
| `plugins.xml()`         | Форматирует XML-файлы                           | [`@prettier/plugin-xml`](https://github.com/prettier/plugin-xml)                                                                                 |

## Миграция с v24

v25 - breaking-релиз: `plugins` и `overrides`, переданные в фабрику, теперь
дополняют дефолтные значения, а не заменяют их.

| v24                                                       | v25                                              |
| --------------------------------------------------------- | ------------------------------------------------ |
| `plugins.mdc({ plugins: ['custom'] })` заменял MDC-плагин | добавляет `custom` к `prettier-plugin-mdc`       |
| `plugins.mdc({ overrides: [...] })` заменял MDC-override  | добавляет overrides после дефолтного             |
| `plugins.ruby({ overrides: [] })` отключал ERB-override   | не отключает; добавьте override для `*.html.erb` |

Скалярные опции работают как раньше: значения из `options` заменяют дефолтные.

## Миграция с v23

v24 - breaking-релиз: плагинов по умолчанию больше нет, всё подключается явно.

| v23                            | v24                                           |
| ------------------------------ | --------------------------------------------- |
| `createConfig()`               | перечислите нужные плагины явно               |
| `createConfig({ php: true })`  | `defineConfig([plugins.php()])`               |
| `createConfig({ sql: false })` | просто не добавляйте `plugins.sql()` в список |
| `createConfig({}, options)`    | `defineConfig([...], options)`                |

Плагины, включённые по умолчанию в v23: `jsdoc`, `mdc`, `packagejson`, `pug`,
`sh`, `solidity`, `sort-json`, `xml`.

## Известные проблемы

- **tailwindcss** ранее конфликтовал с **jsdoc**
