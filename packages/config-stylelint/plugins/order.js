const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');

function buildAttributeRules() {
  return [
    ...LETTERS.map((l) => ({
      selector: new RegExp(String.raw`\[${l}`),
      type: 'rule',
    })),
    { selector: /\[/, type: 'rule' },
  ];
}

function buildLetterRules(prefix) {
  return [
    ...LETTERS.map((l) => ({
      selector: new RegExp(`${prefix}${l}`),
      type: 'rule',
    })),
    { selector: new RegExp(prefix), type: 'rule' },
  ];
}

function buildPseudoClassRules() {
  return [
    ...LETTERS.map((l) => ({ selector: `:${l}`, type: 'rule' })),
    { selector: ':', type: 'rule' },
  ];
}

function buildPseudoElementRules() {
  return [
    ...LETTERS.map((l) => ({ selector: `::${l}`, type: 'rule' })),
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

      // At-rules
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
