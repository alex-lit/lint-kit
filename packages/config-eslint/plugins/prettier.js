import config from 'eslint-config-prettier';
import plugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

import { createPlugin, FILES, VUE_FILES } from '../base.js';
import { STYLE_RULES } from '../rules/style.js';

const fixes = {
  // fix  for prettier
  'vue/html-self-closing': [
    'error',
    {
      html: { component: 'always', normal: 'never', void: 'always' },
      math: 'always',
      svg: 'always',
    },
  ],
};

/**
 * Форматирование кода самим Prettier (ESLint запускает Prettier как правило).
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
 */
export const prettier = createPlugin(() =>
  defineConfig([
    { files: FILES, ...plugin, rules: { ...plugin.rules, ...STYLE_RULES } },
    { files: VUE_FILES, rules: { ...fixes } },
  ]),
);

/**
 * Отключение правил, конфликтующих с Prettier.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
 */
export const prettierConfig = createPlugin(() =>
  defineConfig([
    { files: FILES, ...config, rules: { ...config.rules, ...STYLE_RULES } },
    { files: VUE_FILES, rules: { ...fixes } },
  ]),
);
