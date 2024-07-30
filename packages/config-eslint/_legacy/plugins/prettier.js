module.exports = {
  extends: ['prettier'],

  // plugins: ['prettier'],

  rules: {
    // 'prettier/prettier': 'error',

    /** Fix for prettier/vue */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'never',
          void: 'always',
        },

        math: 'always',
        svg: 'always',
      },
    ],
  },
};
