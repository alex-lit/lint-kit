import plugin from '@eslint/json';
import { defineConfig } from 'eslint/config';
import * as yamlParser from 'yaml-eslint-parser';

import { createPlugin, YAML_FILES } from '../base.js';

/**
 * Правила для JSON, JSONC, JSON5 и YAML-файлов.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [ESLint/JSON](https://github.com/eslint/json)
 */
export const json = createPlugin(() =>
  defineConfig([
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
      languageOptions: { allowTrailingCommas: true },
      plugins: { json: plugin },
    },

    {
      extends: ['json/recommended'],
      files: ['**/*.json5'],
      language: 'json/json5',
      plugins: { json: plugin },
    },

    { files: YAML_FILES, languageOptions: { parser: yamlParser } },
  ]),
);
