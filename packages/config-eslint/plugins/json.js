import plugin from '@eslint/json';
import { defineConfig } from 'eslint/config';
import * as yamlParser from 'yaml-eslint-parser';

import { YAML_FILES } from '../base.js';

/** @see [ESLint/JSON](https://github.com/eslint/json) */
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

  // YAML has no rules of its own, but the parser validates the syntax and
  // rejects duplicate keys, which is the most common YAML mistake.
  { files: YAML_FILES, languageOptions: { parser: yamlParser } },
]);
