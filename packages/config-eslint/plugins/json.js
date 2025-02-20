import plugin from '@eslint/json';

/** @see [eslint/json](https://github.com/eslint/json) */
export const json = [
  // json
  {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json'],
    language: 'json/json',
    ...plugin.configs.recommended,
  },
  {
    files: ['**/*.json'],
    ignores: ['**/package.json', '**/package-lock.json'],
    rules: {
      'json/sort-keys': 'warn',
      'json/top-level-interop': 'error',
    },
  },

  // jsonc
  {
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
    ...plugin.configs.recommended,
  },

  // json5
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...plugin.configs.recommended,
  },
];
