import plugin from 'eslint-plugin-prettier/recommended';

/** @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) */
export const prettier = [
  plugin,

  {
    rules: {
      'prettier/prettier': 'off', // too slow

      // fix  for prettier/vue
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
  },
];
