import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { DATA_FILES, FILES, TEST_FILES } from '../base.js';
import { TS_RULES } from '../rules/typescript.js';

/**
 * Правила TypeScript без анализа типов.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
 */
export const typescript = (config = []) =>
  defineConfig([
    // `plugin.configs.strict`/`stylistic` содержат блоки без ключа `files`,
    // поэтому они также применялись бы к data-файлам, которые вообще не JavaScript.
    ...[...plugin.configs.strict, ...plugin.configs.stylistic].map(
      (config) => ({
        ...config,
        ignores: [...(config.ignores ?? []), ...DATA_FILES],
      }),
    ),

    { files: FILES, rules: TS_RULES },
    {
      files: TEST_FILES,
      rules: { '@typescript-eslint/no-empty-function': 'off' },
    },

    config,
  ]);
