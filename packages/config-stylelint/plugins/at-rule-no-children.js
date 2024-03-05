/** @see [stylelint-at-rule-no-children](https://github.com/adityavm/stylelint-at-rule-no-children) */
export default {
  plugins: ['stylelint-at-rule-no-children'],

  rules: {
    'aditayvm/at-rule-no-children': [
      {
        ignore: ['for', 'each', 'layer', 'mixin', 'while'],
        severity: 'error',
      },
    ],
  },
};
