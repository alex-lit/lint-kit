module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    jest: true,
  },

  ignorePatterns: [
    '**/.git/**',
    '**/build/**',
    '**/dist/**',
    '**/docs/**',
    '**/node_modules/**',
    '**/sw.js',
    '!/.*.js',
  ],

  extends: [
    require.resolve('./configs/nuxt.js'),
    require.resolve('./configs/import.js'),
    require.resolve('./configs/simple-import-sort.js'),
    require.resolve('./configs/jsdoc.js'),
    require.resolve('./configs/sonar.js'),
    require.resolve('./configs/decorator-position.js'),
    require.resolve('./configs/typescript.js'),
    require.resolve('./configs/vue.js'),
    require.resolve('./configs/testing-library.js'),
    require.resolve('./configs/yaml.js'),
    require.resolve('./configs/json.js'),
    require.resolve('./configs/no-loops.js'),
    require.resolve('./configs/no-secrets.js'),
    require.resolve('./configs/filenames.js'),
    require.resolve('./configs/sql.js'),
    require.resolve('./configs/prettier.js'),

    /**
     * Optional configs
     */
    // require.resolve('./configs/optional/vuetify.js'),
  ],

  rules: {
    'no-console': 'off',
    'no-use-before-define': 'off',
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'switch' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      { blankLine: 'never', prev: 'const', next: 'const' },
      { blankLine: 'never', prev: 'let', next: 'let' },
    ],
  },
};
