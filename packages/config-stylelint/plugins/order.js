import { mergeConfigs } from '../utils/merge-configs.js';

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

const DEEP_PSEUDO_CLASSES = ['deep', 'global', 'slotted'];

const buildAttributeRules = () => [
  ...LETTERS.map((letter) => ({
    selector: new RegExp(String.raw`\[${letter}`),
    type: 'rule',
  })),
  { selector: /\[/, type: 'rule' },
];

const buildLetterRules = (prefix) => [
  ...LETTERS.map((letter) => ({
    selector: new RegExp(`${prefix}${letter}`),
    type: 'rule',
  })),
  { selector: new RegExp(prefix), type: 'rule' },
];

const buildPseudoClassBemRules = (prefix) =>
  DEEP_PSEUDO_CLASSES.flatMap((pseudo) => [
    ...LETTERS.map((letter) => ({
      selector: new RegExp(String.raw`:${pseudo}\(&${prefix}${letter}`),
      type: 'rule',
    })),
    { selector: new RegExp(String.raw`:${pseudo}\(&${prefix}`), type: 'rule' },
  ]);

const buildMediaFeatureRules = () =>
  MEDIA_FEATURES.map((parameter) => ({
    name: 'media',
    parameter,
    type: 'at-rule',
  }));

const buildPseudoClassRules = () => [
  ...LETTERS.map((letter) => ({
    selector: new RegExp(String.raw`:(?!deep\b|slotted\b|global\b)${letter}`),
    type: 'rule',
  })),
  { selector: /:(?!deep\b|slotted\b|global\b)/, type: 'rule' },
];

const buildPseudoElementRules = () => [
  ...LETTERS.map((letter) => ({ selector: `::${letter}`, type: 'rule' })),
  { selector: '::', type: 'rule' },
];

const DEFAULTS = {
  plugins: ['stylelint-order'],
  rules: {
    'order/custom-properties-alphabetical-order': true,
    'order/order': [
      // Переменные SASS
      'dollar-variables',

      // Переменные LESS
      'at-variables',

      // SASS-расширения (extend)
      { name: 'extend', type: 'at-rule' },

      // SASS-директивы include
      { hasBlock: false, name: 'include', type: 'at-rule' },

      // Директивы @apply Tailwind
      { name: 'apply', type: 'at-rule' },

      // CSS-кастомные свойства
      'custom-properties',

      // Объявления
      'declarations',

      // Медиавыражения
      ...buildMediaFeatureRules(),

      // At-правила
      ...AT_RULES.map((name) => ({ name, type: 'at-rule' })),
      'at-rules',

      // Псевдоэлементы
      ...buildPseudoElementRules(),

      // Псевдоклассы
      ...buildPseudoClassRules(),

      // BEM в функциях псевдоклассов (:deep, :global, :slotted)
      ...buildPseudoClassBemRules('--'),
      ...buildPseudoClassBemRules('__'),

      // Селектор по ID
      { selector: /#/, type: 'rule' },

      // Список селекторов
      { selector: ',', type: 'rule' },

      // Селекторы классов
      ...buildLetterRules(String.raw`\.`),

      // Селекторы атрибутов
      ...buildAttributeRules(),

      // Комбинаторы
      { selector: /\*/, type: 'rule' },
      { selector: /\+/, type: 'rule' },
      { selector: />/, type: 'rule' },
      { selector: /\|\|/, type: 'rule' },
      { selector: /~/, type: 'rule' },
      'rules',

      // BEM-модификатор
      ...buildLetterRules('--'),

      // BEM-элемент
      ...buildLetterRules('__'),
    ],
    'order/properties-alphabetical-order': true,
  },
};

/**
 * Настраивает порядок свойств и селекторов.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-order](https://github.com/hudochenkov/stylelint-order)
 */
export const order = (options = {}) => mergeConfigs(DEFAULTS, options);
