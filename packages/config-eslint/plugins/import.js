/* eslint-disable no-undef */
module.exports = {
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],

  overrides: [
    {
      files: [
        '**/.*/**',
        '**/types/**',
        '*.d.ts',
        '*.stories.js',
        '*.stories.ts',
        '.*.js',
        '.*.ts',
      ],

      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],

  plugins: ['import'],

  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    'import/first': 'error',
    'import/no-mutable-exports': 'error',

    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },

        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],

        'newlines-between': 'always',

        pathGroups: [
          // Nuxt
          { group: 'internal', pattern: '#**', position: 'after' },
          // Structure
          { group: 'internal', pattern: '{@,~}/core', position: 'after' },
          { group: 'internal', pattern: '{@,~}/features', position: 'after' },
          { group: 'internal', pattern: '{@,~}/modules', position: 'after' },
          // FSD
          {
            group: 'internal',
            pattern: '{@,~}/processes/**',
            position: 'after',
          },
          { group: 'internal', pattern: '{@,~}/pages/**', position: 'after' },
          { group: 'internal', pattern: '{@,~}/widgets/**', position: 'after' },
          {
            group: 'internal',
            pattern: '{@,~}/features/**',
            position: 'after',
          },
          {
            group: 'internal',
            pattern: '{@,~}/entities/**',
            position: 'after',
          },
          { group: 'internal', pattern: '{@,~}/shared/**', position: 'after' },
        ],

        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],

    'import/prefer-default-export': 'off',
  },

  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],

    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },

    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],

        map: [
          ['@', './src'],
          ['~', './src'],
          ['~~', './'],
        ],
      },

      node: {
        extensions: [
          '.cjs',
          '.cts',
          '.d.ts',
          '.js',
          '.json',
          '.mjs',
          '.mts',
          '.ts',
        ],
      },
    },
  },
};
