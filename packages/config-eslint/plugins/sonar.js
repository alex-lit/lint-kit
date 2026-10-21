import plugin from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

import { createPlugin, FILES } from '../base.js';

/**
 * Правила SonarJS.
 *
 * @param {import('eslint').Linter.Config} [options] - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md)
 */
export const sonar = createPlugin(() =>
  defineConfig([
    {
      files: FILES,
      ...plugin.configs.recommended,
      rules: {
        ...plugin.configs.recommended.rules,
        'sonarjs/no-commented-code': 'warn',
        'sonarjs/todo-tag': 'off',
        'sonarjs/unused-import': 'off', // @typescript-eslint/no-unused-vars
      },
    },
  ]),
);
