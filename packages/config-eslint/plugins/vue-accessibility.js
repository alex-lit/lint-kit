import plugin from 'eslint-plugin-vuejs-accessibility';
import { defineConfig } from 'eslint/config';

import { VUE_FILES } from '../base.js';

/**
 * Правила доступности Vue.js-компонентов.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/)
 */
export const vueAccessibility = (config = []) =>
  defineConfig([
    ...plugin.configs['flat/recommended'],

    {
      files: VUE_FILES,
      rules: {
        'vuejs-accessibility/label-has-for': [
          'warn',
          { allowChildren: true, required: { some: ['nesting', 'id'] } },
        ],
        'vuejs-accessibility/no-autofocus': ['warn', { ignoreNonDOM: true }],
      },
    },

    config,
  ]);
