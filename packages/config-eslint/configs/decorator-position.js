/**
 * [Plugin documentation](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position/blob/master/docs/rules/decorator-position.md)
 */
module.exports = {
  plugins: ['decorator-position'],

  rules: {
    'decorator-position/decorator-position': [
      'warn',
      {
        properties: 'above',
        methods: 'above',
      },
    ],
  },
};
