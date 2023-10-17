/** @see [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position) */
module.exports = {
  extends: ['plugin:decorator-position/base'],

  plugins: ['decorator-position'],

  rules: {
    'decorator-position/decorator-position': [
      'warn',
      {
        methods: 'above',
        properties: 'above',
      },
    ],
  },
};
