import plugin from 'eslint-plugin-perfectionist';

/** @see [eslint-plugin-perfectionist](https://perfectionist.dev) */
export const perfectionist = [
  plugin.configs['recommended-natural'],
  {
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          internalPattern: ['^#.*', '^~/.*', '^~~/.*', '^@/.*', '^@@/.*'],
        },
      ],
      'perfectionist/sort-object-types': [
        'warn',
        {
          newlinesBetween: 'always',
          partitionByComment: true,
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
