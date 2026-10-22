import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { DATA_FILES, FILES, TEST_FILES } from '../base.js';
import { TS_RULES } from '../rules/typescript.js';

/**
 * Правила TypeScript без анализа типов.
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
 */
export const typescript = () =>
  defineConfig([
    // `plugin.configs.strict`/`stylistic` contain blocks without a `files` key,
    // so they would also land on data files that are not JavaScript at all.
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
  ]);
