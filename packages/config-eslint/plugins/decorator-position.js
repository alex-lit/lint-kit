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
