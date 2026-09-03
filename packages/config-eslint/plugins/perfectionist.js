import plugin from 'eslint-plugin-perfectionist';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-perfectionist](https://perfectionist.dev) */
export const perfectionist = defineConfig([
  { ...plugin.configs['recommended-natural'], files: FILES },
  {
    files: FILES,
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: [
            // hash
            { elementNamePattern: ['^#'], groupName: 'hash' },

            // @@/
            { elementNamePattern: ['^@@/'], groupName: 'double-at' },

            // universal
            { elementNamePattern: ['^@/api'], groupName: 'universal-api' },
            {
              elementNamePattern: ['^@/assets'],
              groupName: 'universal-assets',
            },
            {
              elementNamePattern: ['^@/components'],
              groupName: 'universal-components',
            },
            {
              elementNamePattern: ['^@/composables'],
              groupName: 'universal-composables',
            },
            {
              elementNamePattern: ['^@/constants'],
              groupName: 'universal-constants',
            },
            {
              elementNamePattern: ['^@/directives'],
              groupName: 'universal-directives',
            },
            {
              elementNamePattern: ['^@/layouts'],
              groupName: 'universal-layouts',
            },
            { elementNamePattern: ['^@/pages'], groupName: 'universal-pages' },
            {
              elementNamePattern: ['^@/plugins'],
              groupName: 'universal-plugins',
            },
            {
              elementNamePattern: ['^@/stores'],
              groupName: 'universal-stores',
            },
            { elementNamePattern: ['^@/utils'], groupName: 'universal-utils' },
          ],
          groups: [
            'type-import',
            ['value-builtin', 'value-external'],

            // hash (nuxt)
            'hash',

            // @@/
            'double-at',

            // universal
            'universal-api',
            'universal-assets',
            'universal-components',
            'universal-composables',
            'universal-constants',
            'universal-directives',
            'universal-layouts',
            'universal-pages',
            'universal-plugins',
            'universal-stores',
            'universal-utils',

            'type-internal',
            'value-internal',
            ['type-parent', 'type-sibling', 'type-index'],
            ['value-parent', 'value-sibling', 'value-index'],
            'ts-equals-import',
            'unknown',
          ],
          internalPattern: ['^@@/.*', '^@/.*'],
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
