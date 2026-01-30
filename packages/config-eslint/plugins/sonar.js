import plugin from 'eslint-plugin-sonarjs';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md) */
export const sonar = defineConfig([
  { files: FILES, ...plugin.configs.recommended },
  {
    files: FILES,
    plugins: { sonar: plugin },
    rules: {
      'sonarjs/no-commented-code': 'warn',
      'sonarjs/no-vue-bypass-sanitization': 'warn',
      'sonarjs/todo-tag': 'warn',
    },
  },
]);
