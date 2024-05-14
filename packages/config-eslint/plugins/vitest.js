module.exports = {
  overrides: [
    {
      extends: ['plugin:vitest/legacy-all'],
      files: ['*.{test,spec}.{js,ts}'],
      plugins: ['vitest'],

      rules: {
        'vitest/no-conditional-in-test': 'off',
        'vitest/no-conditional-tests': 'off',
        'vitest/no-hooks': 'off',
        'vitest/require-to-throw-message': 'off',
      },
    },
  ],
};
