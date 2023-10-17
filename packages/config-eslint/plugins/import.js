/**
 * @see [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
 * @see [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias)
 */
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
    'import/order': 'off', // delegated to simple-import-sort plugin
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

      node: { extensions: ['.d.ts', '.js', '.json', '.mjs', '.mts', '.ts'] },
    },
  },
};
