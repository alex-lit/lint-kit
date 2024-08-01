import config from 'eslint-config-prettier';
import plugin from 'eslint-plugin-prettier/recommended';

const fixes = {
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
};

/** @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) */
export const prettier = [
  plugin,
  {
    files: ['**/*.vue'],
    rules: { ...fixes },
  },
];

/** @see [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) */
export const prettierConfig = [
  config,
  {
    files: ['**/*.vue'],
    rules: { ...fixes },
  },
];
