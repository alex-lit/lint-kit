import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { FILES, TEST_FILES } from '../base.js';
import { TS_RULES } from '../rules/typescript.js';

/** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
export const typescript = defineConfig([
  ...plugin.configs.strict,
  ...plugin.configs.stylistic,

  { files: FILES, rules: TS_RULES },
  {
    files: TEST_FILES,
    rules: { '@typescript-eslint/no-empty-function': 'off' },
  },
]);
