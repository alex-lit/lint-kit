import plugin from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md) */
export const sonar = defineConfig([
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
]);
