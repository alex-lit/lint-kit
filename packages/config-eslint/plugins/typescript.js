import plugin from 'typescript-eslint';

import { FILES } from '../presets/_base.js';

/** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
export const typescript = [
  ...plugin.configs.strict,
  ...plugin.configs.stylistic,

  {
    files: FILES,
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
