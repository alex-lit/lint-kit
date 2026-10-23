# Hooks Configuration

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-hooks)](https://www.npmjs.com/package/@alexlit/config-hooks)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-hooks)](https://npmx.dev/package/@alexlit/config-hooks)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-hooks)](LICENSE)

Готовые конфигурации для git-хуков проекта - три инструмента, которые вместе
следят за качеством коммитов:

- **commitlint** - проверяет, что сообщение коммита написано по
  [Conventional Commits](https://www.conventionalcommits.org/) (`fix: ...`,
  `feat: ...` и т.д.);
- **lint-staged** - запускает линтеры и форматтеры только на файлах, попавших в
  коммит;
- **simple-git-hooks** - устанавливает сами хуки в `.git/hooks`.

## Установка

```bash
npm i @alexlit/config-hooks -D
```

## Подключение

### 1. commitlint

```js
// commitlint.config.js
export default { extends: ['@alexlit/config-hooks/commitlint'] };
```

Коммит с сообщением не по Conventional Commits будет отклонён.

### 2. lint-staged

```js
// lint-staged.config.js
import { defineConfig } from '@alexlit/config-hooks';

export default defineConfig();
```

`defineConfig()` возвращает готовую карту «тип файла → команды»: при
`git commit` к изменённым файлам применяются только подходящие линтеры
(например, `.vue` - eslint + stylelint + prettier, `.md` - prettier +
markdownlint). Ниже - [настройка](#настройка-lint-staged).

### 3. simple-git-hooks

Пропишите хуки в `package.json` и установите их:

```json
// package.json
{
  "scripts": { "prepare": "simple-git-hooks" },
  "simple-git-hooks": {
    "commit-msg": "npx commitlint --edit",
    "pre-commit": "npx lint-staged"
  }
}
```

```bash
git config --unset core.hooksPath || true
rm -rf .git/hooks/*
npx simple-git-hooks
```

Скрипт `prepare` установит хуки автоматически после `npm install`.

## Настройка lint-staged

У `defineConfig(plugins?, config?)` два необязательных аргумента.

### Линтеры

Первый аргумент - включает и выключает линтеры (по умолчанию включены все):

| Линтер         | Команда                                             | Файлы                                                     |
| -------------- | --------------------------------------------------- | --------------------------------------------------------- |
| `eslint`       | `eslint --fix`                                      | `*.js`, `*.ts`, `*.jsx`, `*.tsx`, `*.vue`, `*.json` и др. |
| `prettier`     | `prettier --write`                                  | почти все текстовые файлы                                 |
| `stylelint`    | `stylelint --fix`                                   | `*.css`, `*.scss`, `*.sass`, `*.pcss`, `*.vue`            |
| `htmllint`     | `linthtml`                                          | `*.html`                                                  |
| `markdownlint` | `markdownlint --fix`                                | `*.md`                                                    |
| `npmlint`      | `npmPkgJsonLint`                                    | `package.json`                                            |
| `lockfilelint` | `lockfile-lint --type npm --path package-lock.json` | `package-lock.json`                                       |

Выключенный линтер заменяется на `echo "... disabled"` - правило остаётся, но
ничего не делает.

```js
// stylelint и htmllint выключены
export default defineConfig({ stylelint: false, htmllint: false });
```

### Свои правила

Второй аргумент - дополняет или переопределяет карту по паттернам:

```js
// lint-staged.config.js
import { defineConfig } from '@alexlit/config-hooks';

export default defineConfig(
  // 1. линтеры
  { stylelint: false },

  // 2. правила по паттернам
  {
    '*.css': [], // пустой массив - отключить правило для css
    '*.yaml': ['echo "Hello, .yaml!"'], // своя команда
  },
);
```

## Миграция v9 → v10

v10 - breaking-релиз: функция переименована для консистентности с остальными
пакетами `@alexlit/config-*` (`defineConfig` в `config-prettier`,
`config-stylelint`).

| v9                             | v10                  |
| ------------------------------ | -------------------- |
| `createLintStagedConfig()`     | `defineConfig()`     |
| `createLintStagedConfig(a, b)` | `defineConfig(a, b)` |

Аргументы и их поведение не изменились - достаточно заменить имя функции.

## Полезные ссылки

- [conventionalcommits](https://www.conventionalcommits.org/)
- [commitlint](https://commitlint.org/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- [simple-git-hooks](https://github.com/typicode/simple-git-hooks)
