import plugin from 'eslint-plugin-better-tailwindcss';
import { defineConfig } from 'eslint/config';

import { FILES, VUE_FILES } from '../base.js';

const DEFAULT_ENTRY_POINT = './styles/tailwind.css';

const rules = {
  ...plugin.configs.correctness.rules,

  // Безопасные autofix-правила, не меняющие переносы и порядок
  'better-tailwindcss/enforce-canonical-classes': 'warn',
  // Сортировка классов и перенос по вариантам
  'better-tailwindcss/enforce-consistent-class-order': [
    'error',
    { order: 'strict' },
  ],
  'better-tailwindcss/enforce-consistent-important-position': 'warn',
  'better-tailwindcss/enforce-consistent-line-wrapping': [
    'error',
    { group: 'newLine', preferSingleLine: false, vueConvertToBinding: true },
  ],
  // Меняют поведение или пересекаются с order/line-wrapping
  'better-tailwindcss/enforce-consistent-variable-syntax': 'off',
  'better-tailwindcss/enforce-consistent-variant-order': 'off',
  'better-tailwindcss/enforce-logical-properties': 'off',
  'better-tailwindcss/enforce-shorthand-classes': 'warn',
  'better-tailwindcss/no-deprecated-classes': 'warn',
  'better-tailwindcss/no-duplicate-classes': 'warn',
  'better-tailwindcss/no-restricted-classes': 'off',
  // В Nuxt UI и кастомных классах правило даёт много ложных срабатываний
  'better-tailwindcss/no-unknown-classes': 'off',
  'better-tailwindcss/no-unnecessary-whitespace': 'warn',
};

/**
 * Правила для Tailwind CSS.
 *
 * Сортирует классы и переносит их по вариантам через
 * `eslint-plugin-better-tailwindcss`. Для Vue.js статический `class`
 * преобразуется в `:class` с шаблонным литералом, чтобы Prettier не схлопывал
 * переносы обратно.
 *
 * Prettier-плагин `plugins.tailwindcss()` из `@alexlit/config-prettier`
 * сортирует только `@apply` и не трогает разметку, поэтому этому форматированию
 * он не мешает.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *   Например, чтобы переопределить путь к CSS-файлу Tailwind:
 *
 *   ```js
 *   plugins.tailwindcss({
 *     settings: {
 *       'better-tailwindcss': {
 *         entryPoint: path.resolve(import.meta.dirname, 'src/main.css'),
 *       },
 *     },
 *   });
 *   ```
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-better-tailwindcss](https://github.com/schoero/eslint-plugin-better-tailwindcss)
 */
export const tailwindcss = (config = []) =>
  defineConfig([
    {
      files: FILES,
      plugins: { 'better-tailwindcss': plugin },
      rules,
      settings: {
        'better-tailwindcss': {
          entryPoint: DEFAULT_ENTRY_POINT,
          selectors: {
            extends: [
              { kind: 'attribute', match: [{ type: 'strings' }], name: '^ui$' },
              // В Vue.js `:ui` приводится к `v-bind:ui`. Плагин преобразует имя
              // селектора в `v-bind:...` только если оно начинается с `:`,
              // поэтому здесь нужен `:ui`, а не `^:ui$`.
              {
                kind: 'attribute',
                match: [{ type: 'strings' }, { type: 'objectValues' }],
                name: ':ui',
              },
            ],
          },
        },
      },
    },

    {
      files: VUE_FILES,
      rules: {
        // `vueConvertToBinding` превращает статический class в :class
        'vue/no-useless-v-bind': 'off',
        'vue/prefer-separate-static-class': 'off',
        'vue/static-class-names-order': 'off',
      },
    },

    config,
  ]);
