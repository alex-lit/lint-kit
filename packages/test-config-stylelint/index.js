/* eslint-disable sonarjs/no-duplicate-string, unicorn/no-null */
module.exports = {
  extends: [
    'stylelint-config-standard',
    ...[
      './plugins/a11y',
      './plugins/at-rule-no-children',
      './plugins/color-format',
      './plugins/declaration-block-no-ignored-properties',
      './plugins/high-performance-animation',
      './plugins/no-nested-media',
      './plugins/no-unresolved-module',
      './plugins/no-unsupported-browser-features',
      './plugins/order',
      './plugins/scss',
      './plugins/selector-no-empty',
      './plugins/use-nesting',
      './plugins/vue',

      './plugins/prettier',

      // optional
      // './plugins/gamut',
      // './plugins/no-indistinguishable-colors',
      // './plugins/optional/logical-css',
      // './plugins/optional/use-logical-spec',
    ].map((config) => require.resolve(config)),
  ],

  ignoreFiles: [
    '.*/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-*/**',
  ],

  rules: {
    'alpha-value-notation': 'number',
    'annotation-no-unknown': [true, { ignoreAnnotations: ['default'] }],
    'at-rule-disallowed-list': ['debug'],

    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignoreAtRules: ['else'],
      },
    ],

    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': null,
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'color-no-hex': true,
    'color-no-invalid-hex': true,

    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-comment', 'after-custom-property', 'first-nested'],
      },
    ],

    'custom-property-pattern': '^_?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'declaration-block-no-redundant-longhand-properties': null,

    'declaration-property-value-no-unknown': [
      true,
      {
        ignoreProperties: {
          '/.+/': /^v-(bind|deep|global|slotted)|\$/,
        },
      },
    ],

    'font-family-name-quotes': 'always-unless-keyword',
    'function-no-unknown': null, // delegate to scss/function-no-unknown
    'function-url-quotes': 'always',
    'function-url-scheme-disallowed-list': ['/^data/', 'ftp', '/^http/'],
    'hue-degree-notation': 'angle',
    indentation: null,
    'keyframes-name-pattern': '^[a-z]+(-[a-z]+)*$',

    'max-nesting-depth': [
      6,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],

    'media-feature-name-no-unknown': [true, { ignoreMediaFeatureNames: [] }],
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'no-unknown-animations': true,
    'number-max-precision': 3,
    'property-no-unknown': [true, { ignoreProperties: ['align-tracks'] }],
    'property-no-vendor-prefix': true,

    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [],
      },
    ],

    'selector-class-pattern': [
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
      {
        message:
          'Selector should be written as BEM "block__element--modifier--value" (selector-class-pattern)',
      },
    ],

    'selector-combinator-disallowed-list': ['>>>', '/deep/'],

    'selector-max-compound-selectors': 6,
    'selector-max-id': 0,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-disallowed-list': ['shadow'],

    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep', 'file-selector-button'] },
    ],

    'selector-type-no-unknown': [true, { ignoreTypes: ['ymaps'] }],
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': null,
    'time-min-milliseconds': 16,

    'value-keyword-case': [
      'lower',
      { camelCaseSvgKeywords: true, ignoreFunctions: ['v-bind'] },
    ],

    'value-no-vendor-prefix': true,
  },
};
