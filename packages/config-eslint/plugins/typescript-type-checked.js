import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { DATA_FILES, FILES, TEST_FILES, TS_FILES } from '../base.js';
import { TS_RULES } from '../rules/typescript.js';

/**
 * Type-aware правила TypeScript.
 *
 * Включается вручную: требует `tsconfig.json` в проекте и информацию о типах,
 * из-за чего линтинг работает медленнее. Используйте его вместо `typescript`, а
 * не вместе с ним.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
 */
export const typescriptTypeChecked = (config = []) =>
  defineConfig([
    // Парсер нужен для каждого JS/TS/Vue-файла, а не только для TypeScript,
    // иначе `.js`-файлы вернутся к парсеру по умолчанию, и современный синтаксис
    // (`import.meta`, top-level await) сломается.
    { ...plugin.configs.base, files: FILES },

    // Правила без анализа типов - та же область, что и у обычного плагина `typescript`,
    // поэтому `.js`/`.vue`-файлы сохраняют TypeScript-версии правил.
    // `plugin.configs.strict`/`stylistic` содержат блоки без ключа `files`,
    // поэтому они также применялись бы к data-файлам, которые вообще не JavaScript.
    ...[...plugin.configs.strict, ...plugin.configs.stylistic].map(
      (config) => ({
        ...config,
        ignores: [...(config.ignores ?? []), ...DATA_FILES],
      }),
    ),

    // Правила с анализом типов имеют смысл только там, где доступна информация о типах.
    ...plugin.configs.strictTypeChecked.map((config) => ({
      ...config,
      files: TS_FILES,
    })),
    ...plugin.configs.stylisticTypeChecked.map((config) => ({
      ...config,
      files: TS_FILES,
    })),

    {
      files: TS_FILES,
      languageOptions: { parserOptions: { projectService: true } },
      rules: TS_RULES,
    },
    {
      files: TEST_FILES,
      rules: { '@typescript-eslint/no-empty-function': 'off' },
    },

    config,
  ]);
