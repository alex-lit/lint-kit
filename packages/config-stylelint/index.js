/* eslint-disable unicorn/no-null */
import { a11y } from './plugins/a11y.js';
import { bem } from './plugins/bem.js';
import { colorFormat } from './plugins/color-format.js';
import { declarationBlockNoIgnoredProperties } from './plugins/declaration-block-no-ignored-properties.js';
import { gamut } from './plugins/gamut.js';
import { highPerformanceAnimation } from './plugins/high-performance-animation.js';
import { logicalCss } from './plugins/logical-css.js';
import { mediaUseCustomMedia } from './plugins/media-use-custom-media.js';
import { noIndistinguishableColors } from './plugins/no-indistinguishable-colors.js';
import { noNestedMedia } from './plugins/no-nested-media.js';
import { noUnresolvedModule } from './plugins/no-unresolved-module.js';
import { noUnsupportedBrowserFeatures } from './plugins/no-unsupported-browser-features.js';
import { order } from './plugins/order.js';
import { prettier } from './plugins/prettier.js';
import { scss } from './plugins/scss.js';
import { selectorNoEmpty } from './plugins/selector-no-empty.js';
import { useNesting } from './plugins/use-nesting.js';
import { vue } from './plugins/vue.js';

/** Плагины. Дефолтных плагинов нет - подключайте нужные явно в `defineConfig`. */
const plugins = {
  a11y,
  bem,
  colorFormat,
  declarationBlockNoIgnoredProperties,
  gamut,
  highPerformanceAnimation,
  logicalCss,
  mediaUseCustomMedia,
  noIndistinguishableColors,
  noNestedMedia,
  noUnresolvedModule,
  noUnsupportedBrowserFeatures,
  order,
  prettier,
  scss,
  selectorNoEmpty,
  useNesting,
  vue,
};

/** Базовые правила, применяются всегда (ниже опций плагинов и `options`). */
const BASE_RULES = {
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
  'at-rule-no-deprecated': [true, { ignoreAtRules: ['apply', 'tailwind'] }],
  'at-rule-no-unknown': null,
  'at-rule-no-vendor-prefix': true,
  'block-no-empty': null,
  'color-function-notation': 'modern',
  'color-hex-length': 'short',
  'color-no-hex': true,
  'color-no-invalid-hex': true,
  'custom-property-empty-line-before': [
    'always',
    { except: ['after-comment', 'after-custom-property', 'first-nested'] },
  ],
  'custom-property-pattern': '^_?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
  'declaration-block-no-redundant-longhand-properties': null,
  'declaration-property-value-no-unknown': [
    true,
    {
      ignoreProperties: {
        '/.+/': /(v-(bind|deep|global|slotted)|calc-size|rgb|theme|view)|\$/,
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
    { ignoreAtRules: ['each', 'media', 'supports', 'include'] },
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
    {
      ignoreProperties: [
        'align-tracks',
        'animation-timeline',
        'interpolate-size',
        'text-stroke',
      ],
    },
  ],
  'property-no-vendor-prefix': true,
  'rule-empty-line-before': [
    'always',
    { except: ['after-single-line-comment', 'first-nested'], ignore: [] },
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
};

/**
 * Создать конфиг Stylelint.
 *
 * Приоритет (от низкого к высокому): база → конфиги плагинов по порядку →
 * `options`. `extends`, `ignoreFiles`, `overrides` и `plugins` конкатенируются
 * (дубли `plugins` убираются), `rules` - shallow merge.
 *
 * @param {import('stylelint').Config[]} [pluginConfigs] - Конфиги плагинов
 *   (например, `[plugins.scss(), plugins.vue()]`)
 * @param {import('stylelint').Config} [options] - Базовые опции Stylelint,
 *   наивысший приоритет
 *
 * @returns {import('stylelint').Config}
 */
const defineConfig = (pluginConfigs = [], options = {}) => {
  const baseConfig = {
    extends: ['stylelint-config-standard'],
    ignoreFiles: [
      '.*',
      '.*/**',
      'build/**',
      'dist/**',
      'docs/**',
      'node_modules/**',
      'storybook-*/**',
    ],
    plugins: [],
    rules: BASE_RULES,
  };

  const sources = [baseConfig, ...pluginConfigs, options];

  return {
    ...Object.assign({}, ...sources),
    extends: sources.flatMap((source) => source.extends ?? []),
    ignoreFiles: sources.flatMap((source) => source.ignoreFiles ?? []),
    overrides: sources.flatMap((source) => source.overrides ?? []),
    plugins: [...new Set(sources.flatMap((source) => source.plugins ?? []))],
    rules: Object.assign({}, ...sources.map((source) => source.rules ?? {})),
  };
};

export { defineConfig, plugins };
