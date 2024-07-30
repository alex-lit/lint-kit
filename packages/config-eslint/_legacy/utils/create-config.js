/* eslint-disable sonarjs/no-duplicate-string, import/order, no-undef */

const { defineConfig } = require('eslint-define-config');

const DEFAULT_PLUGINS = {
  /** @see [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position) */
  'decorator-position': true,

  /**
   * @see [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
   * @see [eslint-import-resolver-alias](https://github.com/johvin/eslint-import-resolver-alias)
   */
  import: false,

  /** @see [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) */
  jsdoc: true,

  /** @see [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) */
  regexp: true,

  /** @see [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort) */
  // 'simple-import-sort': false,

  /** @see [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) */
  sonar: true,

  /** @see [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) */
  // 'sort-class-members': false,

  /** @see [eslint-plugin-sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys) */
  // 'sort-destructure-keys': false,

  /** @see [eslint-plugin-sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix) */
  // 'sort-keys-fix': false,

  /** @see [@tanstack/query](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query) */
  'tanstack-query': true,

  /** @see [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) */
  'testing-library': false,

  /** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
  typescript: true,

  /** @see [eslint-plugin-typescript-sort-keys](https://github.com/infctr/eslint-plugin-typescript-sort-keys) */
  // 'typescript-sort-keys': true,

  /** @see [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) */
  unicorn: true,

  /** @see [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports) */
  // 'unused-imports': true,

  /** @see [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest) */
  vitest: true,

  /** @see [eslint-plugin-vue](https://eslint.vuejs.org/rules/) */
  vue: true,

  /** @see [eslint-plugin-vue-i18n](https://eslint-plugin-vue-i18n.intlify.dev/) */
  'vue-i18n': true,

  /** @see [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) */
  'vuejs-accessibility': true,
};

const OPTIONAL_PLUGINS = {
  /** @see [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func) */
  'array-func': false,

  /** @see [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) */
  compat: false,

  /** @see [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments) */
  'eslint-comments': false,

  /** @see [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc) */
  etc: false,

  /** @see [eslint-plugin-ext](https://github.com/jiangfengming/eslint-plugin-ext) */
  ext: false,

  /** @see [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames) */
  filenames: false,

  /** @see [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) */
  'jsx-a11y': false,

  /** @see [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) */
  lit: false,

  /** @see [eslint-plugin-lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) */
  'lit-a11y': false,

  /** @see [eslint-plugin-more](https://github.com/WebbyLab/eslint-plugin-more) */
  more: false,

  /** @see [eslint-plugin-no-await-in-promise](https://github.com/hugo-vrijswijk/eslint-plugin-no-await-in-promise/) */
  'no-await-in-promise': false,

  /** @see [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind) */
  'no-constructor-bind': false,

  /** @see [eslint-plugin-no-explicit-type-exports](https://github.com/intuit/eslint-plugin-no-explicit-type-exports) */
  'no-explicit-type-exports': false,

  /** @see [eslint-plugin-no-loops](https://github.com/buildo/eslint-plugin-no-loops) */
  'no-loops': false,

  /** @see [eslint-plugin-no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets) */
  'no-secrets': false,

  /** @see [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) */
  'no-use-extend-native': false,

  /** @see [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) */
  node: false,

  /** @see [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) */
  promise: false,

  /** @see [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) */
  security: false,

  /** @see [eslint-plugin-spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck) */
  spellcheck: false,

  /** @see [eslint-plugin-sql](https://github.com/gajus/eslint-plugin-sql) */
  sql: false,

  /** @see [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) */
  wc: false,

  /** @see [eslint-plugin-write-good-comments](https://github.com/kantord/eslint-plugin-write-good-comments) */
  'write-good-comments': false,
};

const CODESTYLE_PLUGINS = {
  /** @see [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) */
  prettier: true,
};

const PLUGINS = {
  ...DEFAULT_PLUGINS,
  ...OPTIONAL_PLUGINS,
  ...CODESTYLE_PLUGINS,
};

/**
 * Create "extends" field
 *
 * @param {PLUGINS} plugins Enabled/disabled plugins list
 */
const createPluginsList = (plugins = {}) => {
  const pluginsList = [];

  Object.entries({ ...PLUGINS, ...plugins })?.forEach(([name, isActive]) => {
    if (isActive) {
      pluginsList.push(require.resolve(`../plugins/${name}`));
    }
  });

  return pluginsList;
};

/**
 * Create eslint config
 *
 * @param {PLUGINS} plugins Enabled/disabled plugins list
 * @param {import('eslint-define-config').defineConfig} options Eslint options
 */
const createConfig = (plugins = {}, options = {}) =>
  defineConfig({
    ...options,

    env: {
      browser: true,
      node: true,

      ...options.env,
    },

    extends: [
      /** @see [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) */
      'airbnb-base',

      ...createPluginsList(plugins),

      ...(options.extends ?? []),
    ],

    ignorePatterns: [
      'build',
      'dist',
      'docs',
      'node_modules',
      'storybook-*',
      'sw.js',
      '!.*.js',
      '!.node',
      '!.storybook',

      ...(options.ignorePatterns ?? []),
    ],

    overrides: [
      {
        files: ['.*.cjs', '.*.js'],

        rules: {
          'global-require': 'off',
        },
      },
      {
        files: ['**/store/**/*', '**/vuex/**/*', '**/pinia/**/*'],

        rules: {
          'no-param-reassign': 'off',
        },
      },

      ...(options.overrides ?? []),
    ],

    parserOptions: {
      ecmaFeatures: { jsx: true },
      extraFileExtensions: ['.vue'],
      parser: '@typescript-eslint/parser',
      project: ['./tsconfig.json'],

      ...options.parserOptions,
    },

    root: options.root ?? true,

    rules: {
      'class-methods-use-this': 'off',
      curly: 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      indent: 'off',

      'lines-around-comment': [
        'warn',
        {
          afterBlockComment: false,
          afterLineComment: false,

          allowArrayEnd: true,
          allowArrayStart: true,

          allowBlockEnd: true,
          allowBlockStart: true,

          allowClassEnd: true,
          allowClassStart: true,

          allowObjectEnd: true,
          allowObjectStart: true,

          beforeBlockComment: true,
          beforeLineComment: false,
        },
      ],

      'no-console': 'warn',

      'no-implicit-coercion': 'error',

      'no-param-reassign': ['error', { props: false }],

      'no-restricted-exports': [
        'error',
        {
          restrictedNamedExports: [
            'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          ],
        },
      ],

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['.', '..', '*/..'],
              message: 'Use absolute path instead',
            },
          ],
        },
      ],

      'no-return-await': 'off',

      'no-shadow': 'off',

      'no-underscore-dangle': 'off',

      'no-unused-vars': 'off',

      // delegate to eslint-plugin-unused-imports
      'no-use-before-define': 'off',

      'nonblock-statement-body-position': ['error', 'below'],

      'padding-line-between-statements': [
        'warn',
        // always
        { blankLine: 'always', next: '*', prev: 'block-like' },
        { blankLine: 'always', next: '*', prev: 'case' },
        { blankLine: 'always', next: '*', prev: 'cjs-export' },
        { blankLine: 'always', next: '*', prev: 'cjs-import' },
        { blankLine: 'always', next: '*', prev: 'class' },
        { blankLine: 'always', next: '*', prev: 'default' },
        { blankLine: 'always', next: '*', prev: 'directive' },
        { blankLine: 'always', next: '*', prev: 'expression' },
        { blankLine: 'always', next: '*', prev: 'iife' },
        { blankLine: 'always', next: '*', prev: 'multiline-block-like' },
        { blankLine: 'always', next: '*', prev: 'multiline-const' },
        { blankLine: 'always', next: '*', prev: 'multiline-expression' },
        { blankLine: 'always', next: '*', prev: 'multiline-let' },
        { blankLine: 'always', next: '*', prev: 'multiline-var' },
        { blankLine: 'always', next: '*', prev: 'singleline-const' },
        { blankLine: 'always', next: '*', prev: 'singleline-let' },
        { blankLine: 'always', next: '*', prev: 'singleline-var' },
        { blankLine: 'always', next: 'block-like', prev: '*' },
        { blankLine: 'always', next: 'cjs-export', prev: '*' },
        { blankLine: 'always', next: 'cjs-import', prev: '*' },
        { blankLine: 'always', next: 'class', prev: '*' },
        { blankLine: 'always', next: 'expression', prev: '*' },
        { blankLine: 'always', next: 'function', prev: '*' },
        { blankLine: 'always', next: 'iife', prev: '*' },
        { blankLine: 'always', next: 'multiline-block-like', prev: '*' },
        { blankLine: 'always', next: 'multiline-const', prev: '*' },
        { blankLine: 'always', next: 'multiline-expression', prev: '*' },
        { blankLine: 'always', next: 'multiline-let', prev: '*' },
        { blankLine: 'always', next: 'multiline-var', prev: '*' },
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: 'switch', prev: '*' },
        // any
        { blankLine: 'any', next: 'expression', prev: 'expression' },
        {
          blankLine: 'any',
          next: 'singleline-const',
          prev: 'singleline-const',
        },
        { blankLine: 'any', next: 'singleline-let', prev: 'singleline-let' },
        { blankLine: 'any', next: 'singleline-var', prev: 'singleline-var' },
        // never
        { blankLine: 'never', next: 'cjs-export', prev: 'cjs-export' },
        { blankLine: 'never', next: 'cjs-import', prev: 'cjs-import' },
        { blankLine: 'never', next: 'directive', prev: 'directive' },
      ],

      quotes: ['error', 'single'],
      'require-await': 'off',

      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],

      'sort-keys': 'off', // delegate to sort-keys-fix

      'sort-vars': 'warn',

      ...options.rules,
    },
  });

module.exports = { createConfig };
