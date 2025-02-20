import globals from 'globals';

export const FILES = ['**/*.{js,mjs,cjs,typescript,vue}'];

/** Base config */
export const _base = [
  {
    files: FILES,
    languageOptions: {
      globals: globals.browser,
    },
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
];
