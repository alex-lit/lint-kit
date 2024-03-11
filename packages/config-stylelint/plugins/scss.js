/* eslint-disable unicorn/no-null */
const KEBAB_CASE_PATTERN = '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$';

export default {
  extends: ['stylelint-config-standard-scss'],

  plugins: ['stylelint-scss'],

  rules: {
    'scss/at-each-key-value-single-line': true,
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': KEBAB_CASE_PATTERN,
    'scss/at-if-no-null': true,
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension': 'always',
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': 'always',
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': KEBAB_CASE_PATTERN,
    'scss/at-rule-conditional-no-parentheses': true,

    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'container',
          // tailwind
          'apply',
          'config',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'variants',
        ],
      },
    ],

    'scss/at-use-no-unnamespaced': true,
    'scss/comment-no-empty': true,
    'scss/comment-no-loud': null,
    'scss/declaration-nested-properties': 'never',
    'scss/declaration-nested-properties-no-divided-groups': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/dollar-variable-default': [true, { ignore: 'local' }],

    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-dollar-variable'],
      },
    ],

    'scss/dollar-variable-first-in-block': [
      true,
      {
        except: [],
        ignore: ['comments', 'imports'],
      },
    ],

    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-no-namespaced-assignment': true,
    'scss/dollar-variable-pattern': KEBAB_CASE_PATTERN,
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/function-color-relative': true,

    'scss/function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'format',
          'url',
          // vue
          'v-bind',
          // tailwind
          'theme',
        ],
      },
    ],

    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/map-keys-quotes': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/no-global-function-names': null,
    'scss/operator-no-newline-after': null,
    'scss/operator-no-unspaced': true,
    'scss/percent-placeholder-pattern': KEBAB_CASE_PATTERN,
    'scss/selector-nest-combinators': 'always',

    'scss/selector-no-redundant-nesting-selector': [
      true,
      { ignoreKeywords: [] },
    ],
  },
};
