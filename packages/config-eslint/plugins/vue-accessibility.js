import plugin from 'eslint-plugin-vuejs-accessibility';

/** @see [eslint-plugin-vuejs-accessibility](https://vue-a11y.github.io/eslint-plugin-vuejs-accessibility/) */
export const vueAccessibility = [
  ...plugin.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    rules: {
      'vuejs-accessibility/label-has-for': [
        'warn',
        {
          allowChildren: true,
          required: {
            some: ['nesting', 'id'],
          },
        },
      ],
      'vuejs-accessibility/no-autofocus': ['warn', { ignoreNonDOM: true }],
    },
  },
];
