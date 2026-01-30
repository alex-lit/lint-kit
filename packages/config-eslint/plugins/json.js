import plugin from '@eslint/json';
import { defineConfig } from 'eslint/config';

/** @see [eslint/json](https://github.com/eslint/json) */
export const json = defineConfig([
  {
    extends: ['json/recommended'],
    files: ['**/*.json'],
    ignores: ['**/package-lock.json'],
    language: 'json/json',
    plugins: { json: plugin },
  },

  {
    extends: ['json/recommended'],
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
    plugins: { json: plugin },
  },

  {
    extends: ['json/recommended'],
    files: ['**/*.json5'],
    language: 'json/json5',
    plugins: { json: plugin },
  },
]);
