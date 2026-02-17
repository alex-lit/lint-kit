import { defineConfig } from 'eslint/config';

import { javascript } from '../plugins/javascript.js';
import { jsdoc } from '../plugins/jsdoc.js';
import { json } from '../plugins/json.js';
import { perfectionist } from '../plugins/perfectionist.js';
import { prettierConfig } from '../plugins/prettier.js';
import { regexp } from '../plugins/regexp.js';
import { sonar } from '../plugins/sonar.js';
import { stylistic } from '../plugins/stylistic.js';
import { typescript } from '../plugins/typescript.js';
import { unicorn } from '../plugins/unicorn.js';
import { vueAccessibility } from '../plugins/vue-accessibility.js';
import { vueI18n } from '../plugins/vue-i18n.js';
import { vue } from '../plugins/vue.js';
import { base } from './base.js';

export const defaultPreset = defineConfig([
  ...base, // must be first

  ...javascript,
  ...jsdoc,
  ...json,
  ...perfectionist,
  ...regexp,
  ...sonar,
  ...stylistic,
  ...typescript,
  ...unicorn,
  ...vue,
  ...vueAccessibility,
  ...vueI18n,

  ...prettierConfig, // must be last
]);
