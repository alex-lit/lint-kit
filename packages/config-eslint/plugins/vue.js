/* eslint-disable spellcheck/spell-checker */
/** @see [eslint-plugin-vue](https://eslint.vuejs.org/rules/) */
module.exports = {
  extends: ['plugin:vue/vue3-recommended'],

  overrides: [
    {
      files: ['**/pages/**/*', '**/layouts/**/*'],

      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],

  plugins: ['vue'],

  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],

    'vue/block-lang': [
      'error',
      {
        script: { lang: 'ts' },
        style: { lang: 'scss' },
        template: {},
      },
    ],

    'vue/component-api-style': ['error', ['script-setup']],

    'vue/component-definition-name-casing': ['error', 'kebab-case'],

    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],

    'vue/component-options-name-casing': ['error', 'PascalCase'],

    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],

    'vue/define-emits-declaration': ['error'],

    'vue/define-macros-order': [
      'error',
      { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] },
    ],

    'vue/define-props-declaration': ['error'],

    'vue/dot-notation': ['error'],

    'vue/eqeqeq': ['error'],

    'vue/html-button-has-type': ['error'],

    'vue/html-comment-content-newline': ['warn'],

    'vue/html-comment-content-spacing': ['warn'],

    'vue/html-comment-indent': ['warn'],

    'vue/html-end-tags': ['error'],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          component: 'always',
          normal: 'never',
          void: 'always',
        },

        math: 'always',
        svg: 'always',
      },
    ],

    'vue/match-component-file-name': ['error'],

    'vue/match-component-import-name': ['error'],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
      },
    ],

    'vue/max-lines-per-block': [
      'warn',
      {
        script: 500,
        skipBlankLines: true,
        style: 500,
        template: 500,
      },
    ],

    'vue/new-line-between-multi-line-property': ['error'],

    'vue/next-tick-style': ['error', 'promise'],

    'vue/no-child-content': ['error'],

    'vue/no-console': ['error'],

    'vue/no-custom-modifiers-on-v-model': 'off',

    'vue/no-deprecated-model-definition': ['error'],

    'vue/no-deprecated-scope-attribute': ['error'],

    'vue/no-deprecated-slot-attribute': ['error'],

    'vue/no-deprecated-slot-scope-attribute': ['error'],

    'vue/no-duplicate-attr-inheritance': ['error'],

    'vue/no-empty-component-block': ['error'],

    'vue/no-invalid-model-keys': ['error'],

    'vue/no-irregular-whitespace': ['error'],

    'vue/no-loss-of-precision': ['error'],

    'vue/no-multiple-objects-in-class': ['error'],

    'vue/no-multiple-template-root': 'off',

    'vue/no-parsing-error': ['error'],

    'vue/no-potential-component-option-typo': ['error'],

    'vue/no-ref-object-reactivity-loss': ['error'],

    'vue/no-required-prop-with-default': [
      'error',
      {
        autofix: true,
      },
    ],

    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVue3BuiltInComponents: true,
        disallowVueBuiltInComponents: true,
      },
    ],

    'vue/no-restricted-component-names': ['error'],

    'vue/no-restricted-component-options': ['error'],

    'vue/no-restricted-props': ['error'],

    'vue/no-root-v-if': ['error'],

    'vue/no-setup-props-reactivity-loss': ['error'],

    'vue/no-this-in-before-route-enter': ['error'],

    'vue/no-unsupported-features': ['error'],

    'vue/no-unused-components': ['error'],

    'vue/no-unused-refs': 'off',

    'vue/no-use-computed-property-like-method': ['error'],

    'vue/no-use-v-else-with-v-for': ['warn'],

    'vue/no-useless-mustaches': ['error'],

    'vue/no-useless-template-attributes': ['error'],

    'vue/no-useless-v-bind': ['error'],

    'vue/no-v-for-template-key': 'off',

    'vue/no-v-html': ['error'],

    'vue/no-v-model-argument': 'off',

    'vue/no-v-text': ['error'],

    'vue/no-v-text-v-html-on-component': ['error'],

    'vue/object-shorthand': ['error'],

    'vue/padding-line-between-blocks': ['error'],

    'vue/padding-line-between-tags': [
      'error',
      [
        {
          blankLine: 'always',
          next: '*',
          prev: '*',
        },
      ],
    ],

    'vue/padding-lines-in-component-definition': [
      'error',
      { groupSingleLineProperties: true },
    ],

    'vue/prefer-define-options': ['error'],

    'vue/prefer-prop-type-boolean-first': ['error'],

    'vue/prefer-separate-static-class': ['error'],

    'vue/prefer-true-attribute-shorthand': ['error'],

    'vue/quote-props': ['error', 'as-needed'],

    'vue/require-direct-export': 'off',

    'vue/require-macro-variable-name': [
      'error',
      {
        defineEmits: '$emit',
        defineProps: '$props',
        defineSlots: '$slots',
        useAttrs: '$attrs',
        useSlots: '$slots',
      },
    ],

    'vue/require-typed-object-prop': ['error'],

    'vue/require-typed-ref': ['error'],

    'vue/sort-keys': [
      'warn',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: true,
      },
    ],

    'vue/static-class-names-order': ['warn'],

    'vue/this-in-template': ['error', 'never'],

    'vue/v-for-delimiter-style': ['error'],

    'vue/v-on-event-hyphenation': ['error'],

    'vue/v-on-handler-style': ['error', 'inline-function'],

    'vue/valid-define-options': ['error'],

    'vue/valid-next-tick': ['error'],

    'vue/valid-v-bind-sync': ['error'],

    'vue/valid-v-slot': ['error'],
  },
};
