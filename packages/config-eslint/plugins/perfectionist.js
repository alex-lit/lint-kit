import plugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-perfectionist](https://perfectionist.dev) */
export const perfectionist = defineConfig([
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
      'perfectionist/sort-interfaces': [
        'warn',
        { newlinesBetween: 0, partitionByComment: false, type: 'natural' },
      ],
      'perfectionist/sort-object-types': [
        'warn',
        { newlinesBetween: 0, partitionByComment: false, type: 'natural' },
      ],
      'perfectionist/sort-objects': [
        'warn',
        { newlinesBetween: 0, partitionByComment: false, type: 'natural' },
      ],
    },
  },
]);
