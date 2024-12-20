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
          partitionByComment: true,
          type: 'natural',
        },
      ],
    },
  },
];
