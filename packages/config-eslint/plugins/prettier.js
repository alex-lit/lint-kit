/** @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) */
module.exports = {
  extends: ['prettier'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',

    /** Fix for prettier/vue */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'never',
          normal: 'never',
          void: 'always',
        },

        math: 'always',
        svg: 'always',
      },
    ],
  },
};
