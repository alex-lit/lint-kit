import plugin from 'eslint-plugin-import-x';
import { createNodeResolver } from 'eslint-plugin-import-x/node-resolver';
import { defineConfig } from 'eslint/config';
import vueParser from 'vue-eslint-parser';

import { DATA_FILES, FILES, VUE_FILES } from '../base.js';

const EXTENSIONS = [
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.vue',
  '.json',
];

/** @see [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) */
export const importX = defineConfig([
  { ...plugin.flatConfigs.recommended, files: FILES, ignores: DATA_FILES },

  {
    files: FILES,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { 'import-x': plugin },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/first': 'error',
      'import-x/newline-after-import': 'warn',
      'import-x/no-absolute-path': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'import-x/unambiguous': 'error',
    },
    settings: {
      'import-x/extensions': EXTENSIONS,
      'import-x/ignore': ['node_modules', String.raw`\.vue$`],
      'import-x/parsers': { '.vue': [vueParser] },
      'import-x/resolver-next': [
        createNodeResolver({ extensions: EXTENSIONS, tsconfig: 'auto' }),
      ],
    },
  },

  { files: VUE_FILES, rules: { 'import-x/unambiguous': 'off' } },
]);
