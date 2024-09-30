import { javascript } from '../plugins/javascript.js';
import { jsdoc } from '../plugins/jsdoc.js';
import { perfectionist } from '../plugins/perfectionist.js';
import { prettierConfig } from '../plugins/prettier.js';
import { regexp } from '../plugins/regexp.js';
import { sonar } from '../plugins/sonar.js';
import { stylistic } from '../plugins/stylistic.js';
import { tanstackQuery } from '../plugins/tanstack-query.js';
import { typescript } from '../plugins/typescript.js';
import { unicorn } from '../plugins/unicorn.js';
import { unocss } from '../plugins/unocss.js';
import { vitest } from '../plugins/vitest.js';
import { vueAccessibility } from '../plugins/vue-accessibility.js';
import { vueI18n } from '../plugins/vue-i18n.js';
import { vue } from '../plugins/vue.js';
import { _base } from './_base.js';

export const defaultPreset = [
  ..._base, // must be first

  ...javascript,
  ...jsdoc,
  ...perfectionist,
  ...regexp,
  ...sonar,
  ...stylistic,
  ...tanstackQuery,
  ...typescript,
  ...unicorn,
  ...unocss,
  ...vitest,
  ...vue,
  ...vueAccessibility,
  ...vueI18n,

  ...prettierConfig, // must be last
];
