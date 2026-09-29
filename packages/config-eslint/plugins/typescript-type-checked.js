import { defineConfig } from 'eslint/config';
import plugin from 'typescript-eslint';

import { FILES, TEST_FILES, TS_FILES } from '../base.js';
import { TS_RULES } from '../rules/typescript.js';

/**
 * Type-aware TypeScript config.
 *
 * Opt-in: requires a `tsconfig.json` in the project and needs type information,
 * which makes linting slower. Use it instead of `typescript`, not alongside
 * it.
 *
 * @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
 */
export const typescriptTypeChecked = defineConfig([
  // The parser is needed for every JS/TS/Vue file, not only for TypeScript ones,
  // otherwise `.js` files fall back to the default parser and modern syntax
  // (`import.meta`, top-level await) breaks.
  { ...plugin.configs.base, files: FILES },

  // Non type-aware rules — the same scope as the regular `typescript` plugin,
  // so `.js`/`.vue` files keep the TypeScript versions of the rules.
  ...plugin.configs.strict,
  ...plugin.configs.stylistic,

  // Type-aware rules only make sense where the type information is available.
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
]);
