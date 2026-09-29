import config from 'eslint-config-prettier';
import plugin from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

import { FILES, VUE_FILES } from '../base.js';
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

/** @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) */
export const prettier = defineConfig([
  { files: FILES, ...plugin, rules: { ...plugin.rules, ...STYLE_RULES } },
  { files: VUE_FILES, rules: { ...fixes } },
]);

/** @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) */
export const prettierConfig = defineConfig([
  { files: FILES, ...config, rules: { ...config.rules, ...STYLE_RULES } },
  { files: VUE_FILES, rules: { ...fixes } },
]);
