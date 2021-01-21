module.exports = {
  plugins: ['vue'],

  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/eqeqeq': ['error'],
    'vue/html-comment-content-newline': ['warn'],
    'vue/html-comment-content-spacing': ['warn'],
    'vue/html-comment-indent': ['warn'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/match-component-file-name': ['error'],
    'vue/no-deprecated-scope-attribute': ['error'],
    'vue/no-deprecated-slot-attribute': ['error'],
    'vue/no-deprecated-slot-scope-attribute': ['error'],
    'vue/no-irregular-whitespace': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-potential-component-option-typo': ['error'],
    'vue/no-reserved-component-names': ['error'],
    'vue/no-unsupported-features': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/no-v-html': 'off',
    'vue/static-class-names-order': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/v-for-delimiter-style': ['error'],
    'vue/v-on-function-call': ['error', 'always'],
    'vue/valid-v-bind-sync': ['error'],
    'vue/valid-v-slot': ['error'],
  },
};
