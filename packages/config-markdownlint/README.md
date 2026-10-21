[![npm version](https://npmx.dev/api/registry/badge/version/@alexlit/config-markdownlint)](https://www.npmjs.com/package/@alexlit/config-markdownlint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-markdownlint)](https://npmx.dev/package/@alexlit/config-markdownlint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-markdownlint)](LICENSE)

# Markdownlint Configuration

Готовый набор правил
[markdownlint](https://github.com/DavidAnson/markdownlint) - линтера
Markdown-файлов. Пакет подключается одной строкой через `extends`, чтобы не
держать конфигурацию в каждом проекте отдельно: включены все правила линтера по
умолчанию, сняты спорные ограничения (длина строки, HTML) и зафиксирован стиль
код-блоков и списков.

Формат пакета - JSON: это конвенция markdownlint-cli, которая загружает конфиги
только в форматах JSON/YAML и не поддерживает JS-конфиги.

## Установка

```sh
npm i @alexlit/config-markdownlint -D
```

## Быстрый старт

```json
// .markdownlint.json
{ "extends": "@alexlit/config-markdownlint" }
```

Готово: линтер работает с набором правил пакета.

## Настройка

Перечислите нужные правила в своём `.markdownlint.json` - собственные ключи
перекрывают одноимённые правила из `extends`.

```json
// .markdownlint.json
{
  "extends": "@alexlit/config-markdownlint",

  "no-inline-html": true,
  "ul-style": { "style": "asterisk" }
}
```

## Полезные ссылки

- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [Список правил](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
