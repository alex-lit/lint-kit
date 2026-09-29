import plugin from 'eslint-plugin-de-morgan';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/** @see [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan) */
export const deMorgan = defineConfig([
  { files: FILES, ...plugin.configs.recommended },
]);
