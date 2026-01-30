import { defineConfig } from 'eslint/config';

// import tailwind from 'eslint-plugin-tailwindcss';
import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss) */
export const tailwindcss = defineConfig([
  // TODO: включить после обновления плагина
  // ...tailwind.configs['flat/recommended'],
  {
    files: FILES,
    rules: {
      // 'tailwindcss/no-custom-classname': 'off',
      'vue/static-class-names-order': 'off',
    },
    // settings: {
    //   tailwindcss: {
    //     callees: [
    //       'classnames',
    //       'clsx',
    //       'cn',
    //       'ctl',
    //       'cva',
    //       'tv',
    //       'tw',
    //       'twMerge',
    //     ],
    //   },
    // },
  },
]);
