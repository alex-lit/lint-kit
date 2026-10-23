import plugin from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';

import { TEST_FILES } from '../base.js';

/**
 * Правила для тестов Vitest.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest)
 */
export const vitest = (config = []) =>
  defineConfig([
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

    config,
  ]);
