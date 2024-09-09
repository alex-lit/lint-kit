/* eslint-disable unicorn/no-null */

const ADDITIONAL_PLUGINS = {
  /** @see [stylelint-a11y](https://github.com/double-great/stylelint-a11y) */
  a11y: true,

  /** @see [stylelint-at-rule-no-children](https://github.com/adityavm/stylelint-at-rule-no-children) */
  'at-rule-no-children': true,

  /** @see [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) */
  'color-format': true,

  /** @see [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) */
  'declaration-block-no-ignored-properties': true,

  /** @see [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation) */
  'high-performance-animation': true,

  /** @see [stylelint-no-nested-media](https://github.com/dkrnl/stylelint-no-nested-media) */
  'no-nested-media': true,

  /** @see [stylelint-no-unresolved-module](https://github.com/niksy/stylelint-no-unresolved-module) */
  'no-unresolved-module': true,

  /** @see [stylelint-order](https://github.com/hudochenkov/stylelint-order) */
  order: true,

  /** @see [stylelint-scss](https://github.com/kristerkari/stylelint-scss) */
  scss: true,

  /** @see [stylelint-selector-no-empty](https://github.com/ssivanatarajan/stylelint-selector-no-empty) */
  'selector-no-empty': true,

  /** @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting) */
  'use-nesting': true,

  /** @see [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) */
  vue: true,
};

const OPTIONAL_PLUGINS = {
  /** @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut) */
  gamut: false,

  /** @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css) */
  'logical-css': false,

  /** @see [stylelint-no-indistinguishable-colors](https://github.com/ierhyna/stylelint-no-indistinguishable-colors) */
  'no-indistinguishable-colors': false,

  /** @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features) */
  'no-unsupported-browser-features': false,
};

const CODESTYLE_PLUGINS = {
  /** @see [stylelint-prettier](https://github.com/prettier/stylelint-prettier) */
  prettier: true,
};

const PLUGINS = {
  ...ADDITIONAL_PLUGINS,
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
      pluginsList.push(`@alexlit/config-stylelint/plugins/${name}`);
    }
  });

  return pluginsList;
};

/**
 * Create stylelint config
 *
 * @param {PLUGINS} plugins Enabled/disabled plugins list
 * @param {import('stylelint').Config} options Stylelint options
 */
const createConfig = (plugins = {}, options = {}) => ({
  ...options,

  extends: [
    'stylelint-config-standard',

    ...createPluginsList(plugins),

    ...(options.extends ?? []),
  ],

  ignoreFiles: [
    '.*/**',
    'build/**',
    'dist/**',
    'docs/**',
    'node_modules/**',
    'storybook-*/**',

    ...(options.ignoreFiles ?? []),
  ],

  plugins: options.plugins ?? [],

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
          // eslint-disable-next-line sonarjs/anchor-precedence
          '/.+/': /^(v-(bind|deep|global|slotted)|theme|view)|\$/,
        },
      },
    ],

    'font-family-name-quotes': 'always-unless-keyword',
    'function-no-unknown': null, // delegate to scss/function-no-unknown
    'function-url-quotes': 'always',
    'function-url-scheme-disallowed-list': ['/^data/', 'ftp', '/^http/'],
    'hue-degree-notation': 'angle',
    'keyframes-name-pattern': '^[a-z]+(-[a-z]+)*$',

    'max-nesting-depth': [
      6,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],

    'media-feature-name-no-unknown': [
      true,
      { ignoreMediaFeatureNames: ['screen'] },
    ],

    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-empty-source': null,
    'no-unknown-animations': true,
    'number-max-precision': 3,

    'property-no-unknown': [
      true,
      { ignoreProperties: ['align-tracks', 'animation-timeline'] },
    ],

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

    ...options.rules,
  },
});

export { createConfig };
