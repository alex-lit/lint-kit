import plugin from 'eslint-plugin-sonarjs';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) */
export const sonar = [
  plugin.configs.recommended,
  {
    plugins: {
      sonar: plugin,
    },
    rules: {
      'sonarjs/pluginRules-of-hooks': 'off', // TODO: до обновления плагина (TypeError: context.getSource is not a function)
      'sonarjs/todo-tag': 'warn',
    },
  },
];
