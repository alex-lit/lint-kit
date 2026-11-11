# План: миграция `@alexlit/config-stylelint` на stylelint 18

- Дата исследования: 2026-11-04
- Обновлено: 2026-11-11
- Статус: этап 1 выпущен в `64.2.0`; этап 2 заблокирован upstream-релизами
- Пакет: `packages/config-stylelint`
- Текущая версия пакета: `64.2.0`

## Итог на 2026-11-11

`stylelint@18.0.0` технически совместим с конфигом: в изолированной копии все
плагины загружаются, правила отрабатывают, падений нет. При принудительном
`overrides` вложенного `stylelint-config-standard` на `41.0.0` ошибок
`Unknown rule` нет, автофикс работает.

Публиковать мажор сейчас нельзя из-за upstream-блокеров и строгой проверки peer
в npm 11.

## Upstream-блокеры

1. `stylelint-config-standard-scss@17.0.0` зависит от
   `stylelint-config-standard ^40.0.0`, где осталось удалённое в 18 правило
   `declaration-block-single-line-max-declarations`. На каждом файле появляется
   `Unknown rule`. Issue:
   <https://github.com/stylelint-scss/stylelint-config-standard-scss/issues/297>
   (открыт, релиза нет).
2. `stylelint-scss@7.4.0` не объявляет поддержку 18: peer `^16.8.2 || ^17.0.0`.
   PR: <https://github.com/stylelint-scss/stylelint-scss/pull/1386> (открыт, CI
   зелёный, peer уже включает `^18.0.0`, но релиза нет).
3. `stylelint-config-recommended-scss@17.0.1` зависит от
   `stylelint-config-recommended ^18.0.0`, а
   `stylelint-config-recommended@18.0.0` имеет peer `stylelint ^17.0.0`.
   Актуальный `stylelint-config-recommended@19.0.0` уже требует `^18`, но
   `recommended-scss` ещё не обновлён. Нужен релиз `recommended-scss` с
   зависимостью от `recommended ^19` и peer `^18`.
4. npm 11.12.1 жёстко падает с `ERESOLVE`, а не ограничивается предупреждениями.
   Чистая установка `stylelint@18` вместе с текущими
   `stylelint-config-standard-scss@17`, `stylelint-config-recommended-scss@17` и
   `stylelint-scss@7.4.0` невозможна без `--legacy-peer-deps`. `overrides` из
   опубликованного пакета у потребителей не применяются, поэтому это не решение
   для релиза.

Блокер `stylelint-prettier` снят: `5.1.0` вышел 2026-11-08, PR
<https://github.com/prettier/stylelint-prettier/pull/397> смержен, поддержка 18
и `fix`-callback есть. `stylelint-prettier@5.0.3` больше не актуален.

`stylelint@18.0.0` вышел 2026-11-03, экосистема всё ещё догоняет.

## Что уже сделано (этап 1)

- `packages/config-stylelint/plugins/color-format.js` переписан на
  `fix`-callback: убран `context.fix`, исправление передаётся через `fix` в
  `report()`, добавлено `rule.meta = { fixable: true }`. Работает и на
  `stylelint@17.16.0`, и на `18.0.0`.
- `stylelint-prettier`: `^5.0.3` → `^5.1.0`.
- `stylelint-gamut`: `^2.0.1` → `^2.0.2` (peer уже включает `^18`).
- `stylelint-order` уже был на `^8.1.3`.
- `package-lock.json` обновлён.
- Проверено: `lint:stylelint` даёт те же 139 ошибок, что и до изменений, без
  новых `Unknown rule`; `--fix` исправляет hex → rgb, порядок свойств и
  форматирование Prettier; `npm pack` и установка tarball в чистый проект без
  `--legacy-peer-deps` работают на `stylelint@17.16.0`.
- Выпущено как `@alexlit/config-stylelint@64.2.0` (тег
  `@alexlit/config-stylelint@64.2.0`).

## Доступные обновления

| Пакет                               | Сейчас                 | Последняя | Статус                            |
| ----------------------------------- | ---------------------- | --------- | --------------------------------- |
| `stylelint`                         | `17.16.0` (точный пин) | `18.0.0`  | ждёт upstream                     |
| `stylelint-config-standard`         | `^40.0.0`              | `41.0.0`  | требует `stylelint ^18`           |
| `stylelint-config-standard-scss`    | `^17.0.0`              | `17.0.0`  | нет релиза с поддержкой 18        |
| `stylelint-config-recommended-scss` | транзитивно `17.0.1`   | `17.0.1`  | нет релиза с поддержкой 18        |
| `stylelint-prettier`                | `^5.1.0`               | `5.1.0`   | обновлено, поддерживает 18        |
| `stylelint-gamut`                   | `^2.0.2`               | `2.0.2`   | обновлено, поддерживает 18        |
| `stylelint-order`                   | `^8.1.3`               | `8.1.3`   | актуально                         |
| `typescript` (config-eslint)        | `^6.0.3`               | `7.0.2`   | заблокировано `typescript-eslint` |

Остальные зависимости `config-stylelint` уже на последних версиях.

## Важные изменения в stylelint 18

- Node: `^22.22.2 || ^24.15.0 || >=26.0.0`. Локально Node `24.15.0`, подходит.
- Удалён `context.fix`. На 2026-11-11 закрыто: `color-format` переписан,
  `stylelint-prettier@5.1.0` поддерживает новый `fix`-callback.
- Удалено правило `declaration-block-single-line-max-declarations`. Остаётся
  единственная причина `Unknown rule` из-за `stylelint-config-standard@40`
  внутри `stylelint-config-standard-scss@17`.
- Удалены `*syntax` из `declaration-property-value-no-unknown` и
  `ignoreSelectors` из `selector-max-specificity` - в этом конфиге не
  используются.
- CLI перешёл на `node:util.parseArgs`: используемые флаги (`--fix`,
  `--allow-empty-input`, `--ignore-path`) валидны, менять
  `scripts/lint.stylelint.sh` не нужно.

## Совместимость зависимостей

Готовы к 18:

- `stylelint-config-standard@41` (peer `^18`)
- `stylelint-prettier@5.1.0` (peer `>=16`, поддержка 18)
- `stylelint-order@8.1.3`
- `stylelint-gamut@2.0.2` (peer включает `^18`)
- `stylelint-config-recommended-vue@2`, `stylelint-config-html@2` (`>=16`)
- `@double-great/stylelint-a11y@3.8.3` (`>=16.7`)
- `@morev/stylelint-plugin@0.7` (`>=16`)
- `stylelint-media-use-custom-media@4.1` (`>=16`)
- `stylelint-no-unsupported-browser-features@8.1.2` (`>=16.0.2`)
- `stylelint-use-nesting@6.0.2` (`>=16.9`)

Формально не объявляют 18, но на практике работают (проверено):

- `stylelint-scss@7.4.0` (`^16.8.2 || ^17`)
- `stylelint-config-standard-scss@17.0.0` (`^17`)
- `stylelint-config-recommended-scss@17.0.1` (`^17`, тянет `recommended@18` с
  peer `^17`)
- `stylelint-declaration-block-no-ignored-properties@3.0.0` (`^17`)
- `stylelint-high-performance-animation@2.0.0` (`^17`)
- `stylelint-plugin-logical-css@2.1.0` (до `^17`)
- `stylelint-no-unresolved-module@2.6.0` (до `^17`)
- `stylelint-no-indistinguishable-colors@2.3.1` (до `^16`)
- `stylelint-selector-no-empty@1.0.9` (`^14.9.1`)
- `stylelint-no-nested-media@0.1.0` (peer не объявлен)

Важно: на практике часть пакетов работает, но npm 11.12.1 всё равно считает
peer-конфликт ошибкой установки. Поэтому критерий готовности - чистый
`npm install` без `--legacy-peer-deps`.

## Результаты проверки 2026-11-11

- Без `overrides` на `stylelint@18.0.0`:
  `Unknown rule declaration-block-single-line-max-declarations` на каждом
  css/scss/vue файле.
- С `overrides` `stylelint-config-standard` на `41.0.0`:
  - полный конфиг из корневого `stylelint.config.js` загружается, все плагины
    работают, `Unknown rule` нет;
  - `stylelint-prettier@5.1.0` форматирует;
  - `stylelint-order@8.1.3` сортирует свойства;
  - пропатченный `color-format` делает `#ffffff` → `rgb(255 255 255)`.
- Чистый `npm install` на `stylelint@18` без `--legacy-peer-deps` падает с
  `ERESOLVE` из-за peer-конфликтов `stylelint-config-standard-scss@17`,
  `stylelint-config-recommended-scss@17` (через
  `stylelint-config-recommended@18`) и `stylelint-scss@7.4.0`. `overrides` не
  спасают от этого конфликта.

## Этап 1: выполнен и выпущен

1. Поднять `stylelint-order` до `^8.1.3` - уже было.
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
       fix: () => {
         decl.value = replaceHexes(decl.value, actual.format);
       },
       index: match.startIndex,
       message,
       node: decl,
       result,
       ruleName,
     });
   };

   rule.meta = { fixable: true };
   ```

3. Дополнительно обновить безопасные зависимости:
   - `stylelint-prettier` до `^5.1.0`;
   - `stylelint-gamut` до `^2.0.2`.
4. Обновить `package-lock.json`, прогнать `lint:stylelint`, проверить `--fix` на
   hex-цветах, порядке свойств и Prettier.
5. Проверить `npm pack` и установку в чистый проект на `stylelint@17`.
6. Выпустить patch/minor `@alexlit/config-stylelint` - сделано, версия `64.2.0`.

## Этап 2: после upstream-релизов

1. Проверить, что вышли:
   - `stylelint-scss` с `peer stylelint ^18` (PR #1386 смержен);
   - `stylelint-config-recommended-scss` с зависимостью от
     `stylelint-config-recommended ^19` и peer `stylelint ^18`;
   - `stylelint-config-standard-scss` с зависимостью от
     `stylelint-config-standard ^41` и `recommended-scss` с поддержкой 18 (issue
     #297 закрыт).
2. Убедиться, что чистый `npm install` без `--legacy-peer-deps` не даёт
   `ERESOLVE`.
3. В `packages/config-stylelint/package.json` обновить:

   ```json
   {
     "stylelint": "18.0.0",
     "stylelint-config-recommended-scss": "<версия с 18, если нужна прямая>",
     "stylelint-config-standard": "^41.0.0",
     "stylelint-config-standard-scss": "<версия с 18>",
     "stylelint-scss": "<версия с 18>"
   }
   ```

   `stylelint` держать точным пином, как сейчас. `stylelint-prettier` уже
   обновлён до `^5.1.0`.

4. Добавить в `packages/config-stylelint/package.json` поле `engines`:
   `"node": "^22.22.2 || ^24.15.0 || >=26.0.0"`.
5. Пересобрать `package-lock.json`, убрать любые временные `overrides`.
6. Проверить:
   - `lint` на `examples/**/*.{css,scss,vue}` до/после (базовая линия содержит
     139 ошибок, важен не ноль, а отсутствие новых `Unknown rule` и падений);
   - `--fix` для цветов, порядка свойств, prettier и scss;
   - `npm pack` и установку в чистый временный проект без `--legacy-peer-deps` и
     без `.npmrc`.
7. Выпустить мажор `@alexlit/config-stylelint`.

## Как проверить через несколько дней

```bash
cd /home/alexlit/Projects/@alexlit/lint-kit

npm view stylelint dist-tags --json
npm view stylelint-scss version peerDependencies --json
npm view stylelint-config-standard-scss version \
  peerDependencies dependencies --json
npm view stylelint-config-recommended-scss version \
  peerDependencies dependencies --json
npm view stylelint-config-recommended version peerDependencies --json
npm view stylelint-prettier version --json

npm outdated --workspaces
```

Критерии готовности к этапу 2:

- `stylelint-scss` в `peerDependencies` содержит `^18.0.0`;
- `stylelint-config-recommended-scss` зависит от
  `stylelint-config-recommended ^19` и объявляет peer `stylelint ^18`;
- `stylelint-config-standard-scss` зависит от `stylelint-config-standard ^41` и
  от обновлённого `stylelint-config-recommended-scss`;
- `npm install` в чистом проекте проходит без `--legacy-peer-deps`;
- `npm pack` + установка в чистый проект не даёт `Unknown rule`.

## Если нужно поднять 18 прямо сейчас (не рекомендуется)

Можно убрать зависимость от `stylelint-config-standard-scss` и
`stylelint-config-recommended-scss`: в `plugins/scss.js` перейти на extends из
`stylelint-config-standard` + собственные правила, перенеся недостающие правила
`standard-scss` и `recommended-scss` в `DEFAULTS`.

Минусы:

- конфиг начнёт отличаться от upstream, потом придётся возвращать;
- `stylelint-scss` всё ещё формально не поддерживает 18;
- потребителям всё равно понадобится `--legacy-peer-deps` из-за peer
  `stylelint-scss@7.4.0`.

## Отдельно: TypeScript 7

`typescript@7.0.2` в `config-eslint` поднять нельзя: `typescript-eslint@8.72.1`
объявляет `peer typescript >=4.8.4 <6.1.0`. Нужен релиз `typescript-eslint` с
поддержкой 7.

## Рабочее дерево

Изменения этапа 1 закоммичены и выпущены: коммит `c2688331`,
`@alexlit/config-stylelint@64.2.0`. `package-lock.json` при этом синхронизировал
устаревшие version-поля workspace-пакетов (root и `config-markdownlint`), это
побочный эффект `npm install`.
