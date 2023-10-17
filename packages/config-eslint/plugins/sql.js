/** @see [eslint-plugin-sql](https://github.com/gajus/eslint-plugin-sql) */
module.exports = {
  plugins: ['sql'],

  rules: {
    'sql/format': [
      'warn',

      {
        ignoreExpressions: false,
        ignoreInline: false,
        ignoreStartWithNewLine: true,
        ignoreTagless: false,
      },

      { spaces: 2 },
    ],

    'sql/no-unsafe-query': [
      'warn',

      {
        allowLiteral: false,
      },
    ],
  },
};
