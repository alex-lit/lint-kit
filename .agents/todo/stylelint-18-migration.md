# План: миграция `@alexlit/config-stylelint` на stylelint 18

Дата исследования: 2026-11-04 Статус: отложено до выхода upstream-релизов, этап
1 можно делать сразу Пакет: `packages/config-stylelint` Текущая версия пакета:
`64.1.2`

## Итог исследования

`stylelint@18.0.0` технически совместим с конфигом: в изолированной копии
`packages/config-stylelint` все плагины загрузились, правила отработали, падений
нет.

Публиковать мажор сейчас нельзя из-за трёх upstream-блокеров:

1. `stylelint-config-standard-scss@17` тянет `stylelint-config-standard@40`, где
   осталось удалённое в 18 правило
   `declaration-block-single-line-max-declarations`. На каждом файле появляется
   `Unknown rule`. Issue:
   https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/297
2. `stylelint-scss@7.4.0` не объявляет поддержку 18. PR:
   https://github.com/stylelint-scss/stylelint-scss/pull/1386 (тесты проходят на
   `18.0.0-next.0`, ждут стабильный релиз).
3. `stylelint-prettier@5.0.3` использует удалённый `context.fix`, поэтому
   `prettier/prettier` перестаёт автофиксить. PR:
   https://github.com/prettier/stylelint-prettier/pull/395 Последний релиз
   `5.0.3` от 2025-01-27.

`stylelint@18.0.0` вышел 2026-11-03, поэтому ecosystem ещё догоняет.

## Доступные обновления

| Пакет                        | Сейчас                 | Последняя | Статус                            |
| ---------------------------- | ---------------------- | --------- | --------------------------------- |
| `stylelint`                  | `17.16.0` (точный пин) | `18.0.0`  | ждёт upstream                     |
| `stylelint-config-standard`  | `^40.0.0`              | `41.0.0`  | требует `stylelint ^18`           |
| `stylelint-order`            | `^8.1.2`               | `8.1.3`   | безопасно, добавлена поддержка 18 |
| `typescript` (config-eslint) | `^6.0.3`               | `7.0.2`   | заблокировано `typescript-eslint` |

Остальные зависимости `config-stylelint` уже на последних версиях.

## Важные изменения в stylelint 18

- Node: `^22.22.2 || ^24.15.0 || >=26.0.0`. Локально Node `24.15.0`, подходит.
- Удалён `context.fix`. Затрагивает:
  - `packages/config-stylelint/plugins/color-format.js` (строка 136);
  - `stylelint-prettier@5.0.3`.
- Удалено правило `declaration-block-single-line-max-declarations`.
- Удалены `*syntax` из `declaration-property-value-no-unknown` и
  `ignoreSelectors` из `selector-max-specificity` - в этом конфиге не
  используются.
- CLI перешёл на `node:util.parseArgs`: используемые флаги (`--fix`,
  `--allow-empty-input`, `--ignore-path`) валидны, менять
  `scripts/lint.stylelint.sh` не нужно.

## Совместимость зависимостей

Готовы к 18:

- `stylelint-config-standard@41` (`peer: ^18`)
- `stylelint-order@8.1.3`
- `stylelint-config-recommended-vue@2`, `stylelint-config-html@2` (`>=16`)
- `@double-great/stylelint-a11y@3.8.3` (`>=16.7`)
- `@morev/stylelint-plugin@0.7` (`>=16`)
- `stylelint-media-use-custom-media@4.1` (`>=16`)
- `stylelint-no-unsupported-browser-features@8.1.2` (`>=16.0.2`)
- `stylelint-use-nesting@6.0.2` (`>=16.9`)

Формально не объявляют 18, но на практике работают (проверено):

- `stylelint-scss@7.4.0` (`^16.8.2 || ^17`)
- `stylelint-config-standard-scss@17.0.0` (`^17`)
- `stylelint-config-recommended-scss@17.0.1` (`^17`)
- `stylelint-declaration-block-no-ignored-properties@3.0.0` (`^17`)
- `stylelint-high-performance-animation@2.0.0` (`^17`)
- `stylelint-gamut@2.0.1` (до `^17`)
- `stylelint-plugin-logical-css@2.1.0` (до `^17`)
- `stylelint-no-unresolved-module@2.6.0` (до `^17`)
- `stylelint-no-indistinguishable-colors@2.3.1` (до `^16`)
- `stylelint-selector-no-empty@1.0.9` (`^14.9.1`)
- `stylelint-no-nested-media@0.1.0` (peer не объявлен)

Проверка установки в чистый проект без `--legacy-peer-deps` показала: npm 11 не
падает, а пишет предупреждения и переопределяет peer. Конфликты peer сами по
себе публикацию не блокируют.

## Результаты проверки в изолированной копии

- Все плагины загрузились под `stylelint@18`: `scss`, `vue`, `a11y`, `bem`,
  `gamut`, `logical-css`, `media-use-custom-media`, `no-unresolved-module`,
  `no-unsupported-browser-features`, `no-indistinguishable-colors`,
  `declaration-block-no-ignored-properties`, `high-performance-animation`,
  `selector-no-empty`, `no-nested-media`, `order`.
- `plugins.scss()` даёт
  `Unknown rule declaration-block-single-line-max-declarations`. Причина
  подтверждена: после принудительного `overrides` вложенного
  `stylelint-config-standard` на `41.0.0` ошибка исчезает.
- `--fix`:
  - `stylelint-order@8.1.3` сортирует свойства корректно;
  - `color-format` перестаёт исправлять hex-цвета (`context.fix` удалён);
  - `prettier/prettier` перестаёт форматировать (`context.fix` удалён).

## Этап 1: можно делать сразу

Не ломает `stylelint@17`, заранее готовит код к 18.

1. В `packages/config-stylelint/package.json` поднять:
   - `"stylelint-order": "^8.1.3"`
2. Переписать `packages/config-stylelint/plugins/color-format.js`:
   - убрать `context` и ветку `context.fix`;
   - передавать `fix` в `report`;
   - добавить `rule.meta = { fixable: true }`.

   Было:

   ```js
   const rule = function (actual, options, context) {
     // ...
     if (context && context.fix) {
       fixPositions.unshift({
         fixTo: actual.format,
         hexValue,
         startIndex: match.startIndex,
       });
       return;
     }

     report({ endIndex, index, message, node: decl, result, ruleName });
   };

   if (fixPositions.length > 0) {
     fixPositions.forEach(({ fixTo }) => {
       decl.value = replaceHexes(decl.value, fixTo);
     });
   }
   ```

   Стало:

   ```js
   const rule = function (actual) {
     // ...
     report({
       endIndex: match.endIndex,
       index: match.startIndex,
       message,
       node: decl,
       result,
       ruleName,
       fix: () => {
         decl.value = replaceHexes(decl.value, actual.format);
       },
     });
   };

   rule.meta = { fixable: true };
   ```

   Проверено: патч работает и на `stylelint@17.16.0`, и на `18.0.0`.

3. Опционально: добавить в `packages/config-stylelint/package.json` поле
   `engines` с требованием Node для будущей 18:
   `"node": "^22.22.2 || ^24.15.0 || >=26.0.0"`.
4. Обновить `package-lock.json`, прогнать `lint:stylelint`, проверить `--fix` на
   hex-цветах.
5. Выпустить patch/minor `@alexlit/config-stylelint`.

## Этап 2: после upstream-релизов

1. Проверить, что вышли:
   - `stylelint-config-standard-scss` с зависимостью от
     `stylelint-config-standard ^41` (issue #297 закрыт);
   - `stylelint-scss` с `peer stylelint ^18` (PR #1386 смержен);
   - `stylelint-prettier` с поддержкой 18 (PR #395 смержен).
2. В `packages/config-stylelint/package.json` обновить:

   ```json
   {
     "stylelint": "18.0.0",
     "stylelint-config-recommended-scss": "<версия с 18>",
     "stylelint-config-standard": "^41.0.0",
     "stylelint-config-standard-scss": "<версия с 18>",
     "stylelint-prettier": "<версия с фиксом context.fix>",
     "stylelint-scss": "<версия с 18>"
   }
   ```

   `stylelint` держать точным пином, как сейчас.

3. Убрать любые временные `overrides`.
4. Пересобрать `package-lock.json`.
5. Проверить:
   - `lint` на `examples/**/*.{css,scss,vue}` до/после (базовая линия уже
     содержит 139 ошибок, важен не ноль, а отсутствие новых `Unknown rule` и
     падений);
   - `--fix` для цветов, порядка свойств, prettier и scss;
   - `npm pack` и установку в чистый временный проект без `.npmrc`
     (`legacy-peer-deps`).
6. Выпустить мажор `@alexlit/config-stylelint`.

## Как проверить через несколько дней

```bash
cd /home/alexlit/Work/@alexlit/lint-kit

npm view stylelint dist-tags --json
npm view stylelint-scss version peerDependencies --json
npm view stylelint-config-standard-scss version \
  peerDependencies dependencies --json
npm view stylelint-config-recommended-scss version peerDependencies --json
npm view stylelint-prettier version --json

npm outdated --workspaces
```

Критерии готовности к этапу 2:

- `stylelint-config-standard-scss` зависит от `stylelint-config-standard ^41`;
- `stylelint-scss` в `peerDependencies` содержит `^18.0.0`;
- `stylelint-prettier` не использует `context.fix` (проверить grep по
  `node_modules/stylelint-prettier/index.js` или changelog);
- `npm pack` + установка в чистый проект не даёт `Unknown rule`.

## Если нужно поднять 18 прямо сейчас (не рекомендуется)

Можно убрать зависимость от `stylelint-config-standard-scss`: в
`plugins/scss.js` перейти на extends из `stylelint-config-standard` +
`stylelint-config-recommended-scss` и перенести недостающие правила
`standard-scss` в `DEFAULTS`.

Минусы:

- `prettier --fix` всё равно сломан до релиза `stylelint-prettier`;
- конфиг начнёт отличаться от upstream, потом придётся возвращать;
- `stylelint-scss` всё ещё формально не поддерживает 18.

## Отдельно: TypeScript 7

`typescript@7.0.2` в `config-eslint` поднять нельзя: `typescript-eslint@8.72.1`
объявляет `peer typescript >=4.8.4 <6.1.0`. Нужен релиз `typescript-eslint` с
поддержкой 7.

## Замечание по рабочему дереву

На момент исследования в репозитории уже было незакоммиченное изменение
`package-lock.json` (расхождение версий root и `config-eslint`). К этому плану
оно отношения не имеет и не трогалось.
