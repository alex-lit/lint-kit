import plugin from 'eslint-plugin-sonarjs';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) */
export const sonar = [
  plugin.configs.recommended,
  {
    plugins: {
      sonar: plugin,
    },
    rules: {
      'sonarjs/no-commented-code': 'warn',
      'sonarjs/no-vue-bypass-sanitization': 'warn',
      'sonarjs/todo-tag': 'warn',
    },
  },
];
