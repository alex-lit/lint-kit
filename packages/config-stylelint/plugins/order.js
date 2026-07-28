const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

const MEDIA_FEATURES = [
  '--laptop',
  '--tablet',
  '--mobile',

  '--reduce-motion',

  'any-hover',
  'any-pointer',
  'aspect-ratio',
  'color',
  'color-gamut',
  'color-index',
  'device-aspect-ratio',
  'device-height',
  'device-width',
  'display-mode',
  'dynamic-range',
  'environment-blending',
  'forced-colors',
  'grid',
  'height',
  'horizontal-viewport-segments',
  'hover',
  'inverted-colors',
  'monochrome',
  'nav-controls',
  'orientation',
  'overflow-block',
  'overflow-inline',
  'pointer',
  'prefers-color-scheme',
  'prefers-contrast',
  'prefers-reduced-data',
  'prefers-reduced-motion',
  'prefers-reduced-transparency',
  'resolution',
  'scan',
  'scripting',
  'update',
  'vertical-viewport-segments',
  'video-color-gamut',
  'video-dynamic-range',
  'width',
];

const AT_RULES = [
  'annotation',
  'character-variant',
  'container',
  'counter-style',
  'document',
  'font-face',
  'font-feature-values',
  'keyframes',
  'media',
  'ornaments',
  'page',
  'screen',
  'starting-style',
  'styleset',
  'stylistic',
  'supports',
  'swash',
  'view-transition',
  'viewport',
];

function buildAttributeRules() {
  return [
    ...LETTERS.map((letter) => ({
      selector: new RegExp(String.raw`\[${letter}`),
      type: 'rule',
    })),
    { selector: /\[/, type: 'rule' },
  ];
}

function buildLetterRules(prefix) {
  return [
    ...LETTERS.map((letter) => ({
      selector: new RegExp(`${prefix}${letter}`),
      type: 'rule',
    })),
    { selector: new RegExp(prefix), type: 'rule' },
  ];
}

function buildMediaFeatureRules() {
  return MEDIA_FEATURES.map((parameter) => ({
    name: 'media',
    parameter,
    type: 'at-rule',
  }));
}

function buildPseudoClassRules() {
  return [
    ...LETTERS.map((letter) => ({ selector: `:${letter}`, type: 'rule' })),
    { selector: ':', type: 'rule' },
  ];
}

function buildPseudoElementRules() {
  return [
    ...LETTERS.map((letter) => ({ selector: `::${letter}`, type: 'rule' })),
    { selector: '::', type: 'rule' },
  ];
}

/**
 * @type {import('stylelint').Config}
 *
 * @see [stylelint-order](https://github.com/hudochenkov/stylelint-order)
 */
export default {
  plugins: ['stylelint-order'],
  rules: {
    'order/custom-properties-alphabetical-order': true,
    'order/order': [
      // SASS variables
      'dollar-variables',

      // LESS variables
      'at-variables',

      // SASS extends
      { name: 'extend', type: 'at-rule' },

      // SASS includes
      { hasBlock: false, name: 'include', type: 'at-rule' },

      // Tailwind applies
      { name: 'apply', type: 'at-rule' },

      // CSS custom properties
      'custom-properties',

      // Declarations
      'declarations',

      // Media features
      ...buildMediaFeatureRules(),

      // At-rules
      ...AT_RULES.map((name) => ({ name, type: 'at-rule' })),
      'at-rules',

      // Pseudo-classes
      ...buildPseudoClassRules(),

      // Pseudo-elements
      ...buildPseudoElementRules(),

      // ID selector
      { selector: /#/, type: 'rule' },

      // Selector list
      { selector: ',', type: 'rule' },

      // Class selectors
      ...buildLetterRules(String.raw`\.`),

      // Attribute selectors
      ...buildAttributeRules(),

      // Combinators
      { selector: /\*/, type: 'rule' },
      { selector: /\+/, type: 'rule' },
      { selector: />/, type: 'rule' },
      { selector: /\|\|/, type: 'rule' },
      { selector: /~/, type: 'rule' },
      'rules',

      // BEM modifier
      ...buildLetterRules('--'),

      // BEM element
      ...buildLetterRules('__'),
    ],
    'order/properties-alphabetical-order': true,
  },
};
