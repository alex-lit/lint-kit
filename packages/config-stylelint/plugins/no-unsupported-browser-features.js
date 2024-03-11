export default {
  plugins: ['stylelint-no-unsupported-browser-features'],

  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignore: ['css-nesting'],
        ignorePartialSupport: true,
        severity: 'warning',
      },
    ],
  },
};
