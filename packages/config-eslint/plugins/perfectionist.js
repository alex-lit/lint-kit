import plugin from 'eslint-plugin-perfectionist';

import { FILES } from '../presets/_base.js';

/** @see [eslint-plugin-perfectionist](https://perfectionist.dev) */
export const perfectionist = [
  { files: FILES, ...plugin.configs['recommended-natural'] },
  {
    files: FILES,
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          internalPattern: ['^#.*', '^~/.*', '^~~/.*', '^@/.*', '^@@/.*'],
          type: 'natural',
        },
      ],
      'perfectionist/sort-object-types': [
        'warn',
        {
          newlinesBetween: 'always',
          partitionByComment: true,
          type: 'natural',
        },
      ],
      'perfectionist/sort-objects': [
        'warn',
        {
          ignorePattern: [
            'Property',
            'breakpoints',
            'endpoints',
            'plugins',
            'screens',
          ],
          newlinesBetween: 'always',
          partitionByComment: true,
          type: 'natural',
        },
      ],
    },
  },
];
