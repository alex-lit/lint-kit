import plugin from 'eslint-plugin-vitest';

/** @see [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) */
export const vitest = [
  {
    files: ['*.{test,spec}.{js,ts}'],
    plugins: {
      vitest: plugin,
    },
    rules: {
      ...plugin.configs.all.rules,

      'vitest/no-conditional-in-test': 'off',
      'vitest/no-conditional-tests': 'off',
      'vitest/no-hooks': 'off',
      'vitest/require-to-throw-message': 'off',
    },
  },
];
