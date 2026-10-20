# Lint Kit

Единый пресет-конфиг для Vue + TypeScript проектов, устанавливается одной
зависимостью и объединяет настройки для всех нужных линтеров.

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

```bash
npm install --save-dev @alexlit/lint-kit
```
