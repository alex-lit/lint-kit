module.exports = {
  extends: ['plugin:vuejs-accessibility/recommended'],

  plugins: ['vuejs-accessibility'],

  rules: {
    'vuejs-accessibility/label-has-for': [
      'warn',
      {
        allowChildren: true,

        required: {
          some: ['nesting', 'id'],
        },
      },
    ],

    'vuejs-accessibility/no-autofocus': ['warn', { ignoreNonDOM: true }],
  },
};
