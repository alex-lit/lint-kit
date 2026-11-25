import config from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

import { FILES, VUE_FILES } from '../base.js';
import { STYLE_RULES } from '../rules/style.js';

/**
 * Отключает правила ESLint, конфликтующие с Prettier.
 *
 * Сам Prettier не запускает. Запускайте его отдельным шагом: через редактор,
 * `prettier --check`/`prettier --write` или lint-staged.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [customConfig]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
 */
export const prettier = (customConfig = []) =>
  defineConfig([
    { files: FILES, ...config, rules: { ...config.rules, ...STYLE_RULES } },
    {
      files: VUE_FILES,
      rules: {
        'vue/html-self-closing': [
          'error',
          {
            html: { component: 'always', normal: 'never', void: 'always' },
            math: 'always',
            svg: 'always',
          },
        ],
      },
    },

    customConfig,
  ]);
