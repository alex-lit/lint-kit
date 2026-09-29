import plugin from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

import { TEST_FILES } from '../base.js';

/** @see [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) */
export const vitest = defineConfig([
  {
    files: TEST_FILES,
    plugins: { vitest: plugin },
    rules: {
      ...plugin.configs.recommended.rules,

      'vitest/no-conditional-in-test': 'off',
      'vitest/no-conditional-tests': 'off',
      'vitest/no-hooks': 'off',
      'vitest/require-to-throw-message': 'off',
    },
  },
]);
