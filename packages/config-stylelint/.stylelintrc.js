module.exports = {
  ignoreFiles: [
    '.git/**',
    '.nuxt-storybook/**',
    '.nuxt/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-static/**',
  ],

  extends: [
    require.resolve('./configs/standard.js'),
    require.resolve('./configs/scss.js'),
    require.resolve('./configs/idiomatic-order.js'),
    require.resolve('./configs/prettier.js'),
  ],

  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'each', 'extend', 'include', 'at-root', 'mixin'],
      },
    ],
    'at-rule-empty-line-before': ['always', { except: 'first-nested' }],
    'block-no-empty': null,
    'color-no-hex': null,
    'custom-property-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'function-url-quotes': 'always',
    'no-descending-specificity': null,
    'no-missing-end-of-source-newline': null,
    'number-leading-zero': 'always',
    'media-feature-name-no-unknown': [
      true,
      { ignoreMediaFeatureNames: ['prefers-reduced-motion'] },
    ],
    'property-no-unknown': [true, { ignoreProperties: ['content-visibility'] }],
    'rule-empty-line-before': ['always', { except: 'first-nested' }],
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['range-thumb', 'v-deep'] },
    ],
    'selector-type-no-unknown': [true, { ignoreTypes: ['ymaps'] }],
    'string-no-newline': null,
    indentation: null,
  },
};
