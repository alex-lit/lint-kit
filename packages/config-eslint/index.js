/* eslint-disable no-restricted-imports */
import globals from 'globals';

import { javascript } from './plugins/javascript.js';
import { jsdoc } from './plugins/jsdoc.js';
import { perfectionist } from './plugins/perfectionist.js';
import { prettier, prettierConfig } from './plugins/prettier.js';
import { regexp } from './plugins/regexp.js';
import { sonar } from './plugins/sonar.js';
import { tanstackQuery } from './plugins/tanstack-query.js';
import { typescript } from './plugins/typescript.js';
import { unicorn } from './plugins/unicorn.js';
import { vitest } from './plugins/vitest.js';
import { vueAccessibility } from './plugins/vue-accessibility.js';
import { vueI18n } from './plugins/vue-i18n.js';
import { vue } from './plugins/vue.js';

export const config = [
  {
    files: ['**/*.{js,mjs,cjs,typescript,vue}'],
    ignores: [
      '**/.temp',
      '**/mockServiceWorker.js',
      '.histoire',
      '.nuxt',
      'build',
      'dist',
      'docs',
      'storybook-*',
      'sw.js',
    ],
  },

  { languageOptions: { globals: globals.browser } },

  ...javascript,
  ...jsdoc,
  ...perfectionist,
  ...regexp,
  ...sonar,
  ...tanstackQuery,
  ...typescript,
  ...unicorn,
  ...vitest,
  ...vue,
  ...vueAccessibility,
  ...vueI18n,

  ...prettierConfig, // must be last
];

export {
  javascript,
  jsdoc,
  perfectionist,
  prettier,
  prettierConfig,
  regexp,
  sonar,
  tanstackQuery,
  typescript,
  unicorn,
  vitest,
  vue,
  vueAccessibility,
  vueI18n,
};
