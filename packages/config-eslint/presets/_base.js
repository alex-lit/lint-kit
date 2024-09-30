import globals from 'globals';

/** Base config */
export const _base = [
  {
    files: ['**/*.{js,mjs,cjs,typescript,vue}'],
  },

  {
    ignores: [
      '**/.temp',
      '**/mockServiceWorker.js',
      '.histoire',
      '.nuxt',
      'build',
      'dist',
      'docs',
      'storybook-*',
      'sw.js',
    ],
  },

  { languageOptions: { globals: globals.browser } },
];
