import tailwind from 'eslint-plugin-tailwindcss';

/** @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) */
export const tailwindcss = [
  ...tailwind.configs['flat/recommended'],

  {
    rules: {
      'tailwindcss/no-custom-classname': 'off',

      'vue/static-class-names-order': 'off',
    },
    settings: {
      tailwindcss: {
        callees: [
          //
          'classnames',
          'clsx',
          'cn',
          'ctl',
          'cva',
          'tv',
          'tw',
          'twMerge',
        ],
      },
    },
  },
];
