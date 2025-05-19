import plugin from 'eslint-plugin-sonarjs';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) */
export const sonar = [
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
];
