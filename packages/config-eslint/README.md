[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-eslint)](https://www.npmjs.com/package/@alexlit/config-eslint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-eslint)](https://npmx.dev/package/@alexlit/config-eslint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-eslint)](LICENSE)

# ESLint Configuration

Готовая конфигурация [ESLint](https://eslint.org/) в формате flat config:
настроенные правила для JavaScript, TypeScript, Vue.js, JSON, YAML, импортов,
Prettier и не только - всё, что обычно приходится настраивать вручную. Вместо
того чтобы подключать и настраивать каждый плагин по отдельности, соберите
конфигурацию из готовых модулей.

Плагины модульные: по умолчанию ничего не включено - вы сами перечисляете нужные
в `defineConfig`.

## Установка

```bash
npm i @alexlit/config-eslint -D
```

## Быстрый старт

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig([
  ...plugins.javascript(),
  ...plugins.typescript(),
  ...plugins.unicorn(),
  ...plugins.prettierConfig(),
]);
```

Каждый плагин возвращает массив блоков конфигурации, поэтому его нужно
развернуть оператором spread (`...`). Добавьте только то, что нужно проекту;
полный список - в разделе [Плагины](#плагины).

> [!NOTE]
>
> `plugins.prettierConfig()` должен быть последним - он отключает правила,
> конфликтующие с Prettier.

Больше плагинов - просто допишите их в массив. Пример:

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig([
  // базовые
  ...plugins.deMorgan(),
  ...plugins.importX(),
  ...plugins.javascript(),
  ...plugins.jsdoc(),
  ...plugins.json(),
  ...plugins.perfectionist(),
  ...plugins.regexp(),
  ...plugins.sonar(),
  ...plugins.stylistic(),
  ...plugins.typescript(),
  ...plugins.unicorn(),

  // проектные
  ...plugins.pinia(),
  ...plugins.tanstackQuery(),
  ...plugins.unocss(),
  ...plugins.vitest(),
  ...plugins.vue(),
  ...plugins.vueAccessibility(),
  ...plugins.vueI18n(),
  ...plugins.zod(),

  // дополнительные правила
  { ignores: ['fixtures/**'], rules: { 'no-console': 'off' } },

  // стилистика
  ...plugins.prettierConfig(),
]);
```

## Плагины

| Плагин                            | Что делает                                    | Пакет                               |
| --------------------------------- | --------------------------------------------- | ----------------------------------- |
| `plugins.deMorgan()`              | Упрощает логические выражения                 | `eslint-plugin-de-morgan`           |
| `plugins.importX()`               | Проверяет импорты и модули                    | `eslint-plugin-import-x`            |
| `plugins.javascript()`            | Базовые правила JavaScript                    | `@eslint/js`                        |
| `plugins.jsdoc()`                 | Проверяет JSDoc-комментарии                   | `eslint-plugin-jsdoc`               |
| `plugins.json()`                  | Проверяет JSON, JSONC, JSON5 и YAML           | `@eslint/json`                      |
| `plugins.perfectionist()`         | Сортирует импорты, объекты, интерфейсы и типы | `eslint-plugin-perfectionist`       |
| `plugins.pinia()`                 | Проверяет Pinia-хранилища                     | `eslint-plugin-pinia`               |
| `plugins.prettier()`              | Форматирует код самим Prettier                | `eslint-plugin-prettier`            |
| `plugins.prettierConfig()`        | Отключает правила, конфликтующие с Prettier   | `eslint-config-prettier`            |
| `plugins.regexp()`                | Проверяет регулярные выражения                | `eslint-plugin-regexp`              |
| `plugins.sonar()`                 | Проверяет код по правилам SonarJS             | `eslint-plugin-sonarjs`             |
| `plugins.stylistic()`             | Проверяет форматирование и стиль кода         | `@stylistic/eslint-plugin`          |
| `plugins.tailwindcss()`           | Проверяет классы Tailwind CSS                 | `eslint-plugin-tailwindcss`         |
| `plugins.tanstackQuery()`         | Проверяет TanStack Query                      | `@tanstack/eslint-plugin-query`     |
| `plugins.typescript()`            | Проверяет TypeScript без анализа типов        | `typescript-eslint`                 |
| `plugins.typescriptTypeChecked()` | Проверяет TypeScript с анализом типов         | `typescript-eslint`                 |
| `plugins.unicorn()`               | Проверяет код по правилам unicorn             | `eslint-plugin-unicorn`             |
| `plugins.unocss()`                | Проверяет UnoCSS                              | `@unocss/eslint-config`             |
| `plugins.vitest()`                | Проверяет тесты Vitest                        | `@vitest/eslint-plugin`             |
| `plugins.vue()`                   | Проверяет Vue.js-компоненты                   | `eslint-plugin-vue`                 |
| `plugins.vueAccessibility()`      | Проверяет доступность Vue.js-компонентов      | `eslint-plugin-vuejs-accessibility` |
| `plugins.vueI18n()`               | Проверяет Vue.js I18n                         | `@intlify/eslint-plugin-vue-i18n`   |
| `plugins.zod()`                   | Проверяет Zod-схемы                           | `eslint-plugin-zod`                 |

## Настройки Tailwind CSS

У `plugins.tailwindcss()` есть собственные настройки плагина - путь к CSS-файлу
с конфигурацией Tailwind CSS (`cssConfigPath`):

```js
// eslint.config.js
import path from 'node:path';

import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig([
  ...plugins.tailwindcss({
    cssConfigPath: path.resolve(import.meta.dirname, 'src/main.css'),
  }),
]);
```

По умолчанию используется путь `./styles/tailwind.css`.

## Type-aware правила

Type-aware правила (`no-floating-promises`, `no-misused-promises`,
`await-thenable`, `no-unsafe-*`, `switch-exhaustiveness-check`,
`no-unnecessary-condition`, …) требуют информации о типах, из-за чего линтинг
замедляется. По умолчанию они не включены.

Чтобы их включить, замените `plugins.typescript()` на
`plugins.typescriptTypeChecked()`:

```js
// eslint.config.js
import { defineConfig, plugins } from '@alexlit/config-eslint';

export default defineConfig([
  ...plugins.javascript(),
  ...plugins.typescriptTypeChecked(), // вместо plugins.typescript()
  ...plugins.prettierConfig(),
]);
```

> [!NOTE]
>
> `plugins.typescriptTypeChecked()` требует `tsconfig.json` в корне проекта
> (используется `projectService`, поэтому держите `tsconfig.json` и
> `tsconfig.node.json` в одном корне, если нужно). Используйте его вместо
> `plugins.typescript()`, а не вместе с ним.

## Prettier или prettierConfig

Оба варианта доступны, и они **не взаимозаменяемы**.

| Плагин                     | Пакет                    | Что делает                                                       |
| -------------------------- | ------------------------ | ---------------------------------------------------------------- |
| `plugins.prettierConfig()` | `eslint-config-prettier` | Только отключает форматирующие правила, конфликтующие с Prettier |
| `plugins.prettier()`       | `eslint-plugin-prettier` | Дополнительно запускает сам Prettier как правило ESLint          |

Используйте `plugins.prettierConfig()`, если Prettier запускается отдельным
шагом (редактор, CLI `prettier`, Husky). Используйте `plugins.prettier()`, если
хотите, чтобы ESLint сам сообщал о форматировании и исправлял его за один
проход - это медленнее и дублирует форматтер.

## Разработка

Просмотр итоговой конфигурации:

```bash
npm run inspect
```

## Полезные ссылки

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
- [ESLint - Documentation](https://eslint.org/docs/latest/)
- [ESLint - Configure Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
