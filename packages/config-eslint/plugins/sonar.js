import plugin from 'eslint-plugin-sonarjs';

/** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) */
export const sonar = [
  plugin.configs.recommended,
  {
    plugins: {
      sonar: plugin,
    },
  },
];
