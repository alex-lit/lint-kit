module.exports = {
  plugins: ['unused-imports'],

  rules: {
    'unused-imports/no-unused-imports': 'error',

    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
