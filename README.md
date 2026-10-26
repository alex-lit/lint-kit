# Lint Kit

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/lint-kit)](https://www.npmjs.com/package/@alexlit/lint-kit)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/lint-kit)](https://npmx.dev/package/@alexlit/lint-kit)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/lint-kit)](LICENSE)

Набор пакетов с конфигурациями для линтинга и форматирования кода Vue +
TypeScript проектов.

## Пакеты

| Пакет                                                  | Назначение                         |
| :----------------------------------------------------- | :--------------------------------- |
| [eslint](packages/config-eslint/README.md)             | Линтинг JavaScript и TypeScript    |
| [hooks](packages/config-hooks/README.md)               | Git-хуки (commitlint, lint-staged) |
| [htmllint](packages/config-htmllint/README.md)         | Линтинг HTML                       |
| [markdownlint](packages/config-markdownlint/README.md) | Линтинг Markdown                   |
| [npmlint](packages/config-npmlint/README.md)           | Линтинг `package.json`             |
| [prettier](packages/config-prettier/README.md)         | Форматирование кода                |
| [stylelint](packages/config-stylelint/README.md)       | Линтинг CSS                        |

## Установка

Рекомендуется устанавливать необходимые пакеты по отдельности - так вы
подключаете только те линтеры, которые необходимы и сможете управлять их
версиями.

Инструкции по настройке каждого пакета приведены в его README (см. ссылки в
разделе [«Пакеты»](#пакеты)).

```bash
# установка необходимого пакета
npm install --save-dev @alexlit/config-<PACKAGE_NAME>

# или все сразу одной командой
npm install --save-dev @alexlit/lint-kit
```
