# NPMLint Configuration

[![version](https://npmx.dev/api/registry/badge/version/@alexlit/config-npmlint)](https://www.npmjs.com/package/@alexlit/config-npmlint)
[![downloads](https://npmx.dev/api/registry/badge/downloads/@alexlit/config-npmlint)](https://npmx.dev/package/@alexlit/config-npmlint)
[![license](https://npmx.dev/api/registry/badge/license/@alexlit/config-npmlint)](LICENSE)

Готовая конфигурация
[npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint) -
линтера `package.json` файлов. Пакет собирает рекомендованный базовый конфиг
`npm-package-json-lint-config-default` (обязательные `name` и `version`,
корректный формат имени и версии, типы всех разделов манифеста) и подключается
одной строкой через `extends`, чтобы не держать конфигурацию в каждом проекте
отдельно.

Формат пакета - JSON: это конвенция npm-package-json-lint, которая загружает
конфиги только в форматах JSON/YAML и не поддерживает JS-конфиги.

## Установка

```bash
npm i @alexlit/config-npmlint -D
```

## Быстрый старт

```json
// .npmpackagejsonlintrc.json
{ "extends": "@alexlit/config-npmlint" }
```

## Пример скриптов для package.json

```json
{
  "scripts": {
    "lint:lockfile": "lockfile-lint --type npm --path package-lock.json && npmPkgJsonLint ."
  }
}
```

Готово: линтер работает с набором правил пакета.

## Настройка

Перечислите нужные правила в своём `.npmpackagejsonlintrc.json` - собственные
ключи перекрывают одноимённые правила из `extends`. Значение правила: `"error"`,
`"warning"` или `"off"`.

```json
// .npmpackagejsonlintrc.json
{
  "extends": "@alexlit/config-npmlint",

  "rules": { "keywords-type": "warning", "require-version": "off" }
}
```

Ошибку можно не снять, а ослабить - замените `"error"` на `"warning"`, чтобы
проблема не ломала сборку.

Кроме `package.json` пакет умеет проверять `package-lock.json` через
[lockfile-lint](https://github.com/lirantal/lockfile-lint) - бинарь уже входит в
зависимости пакета.

## Полезные ссылки

- [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint)
- [Список правил](https://npmpackagejsonlint.org/docs/rules)
- [Конфигурация](https://npmpackagejsonlint.org/docs/configuration)
- [npm-package-json-lint-config-default](https://github.com/tclindner/npm-package-json-lint-config-default)
- [lockfile-lint](https://github.com/lirantal/lockfile-lint)
