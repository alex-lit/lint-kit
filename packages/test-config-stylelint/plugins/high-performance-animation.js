/** @see [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation) */
module.exports = {
  plugins: ['stylelint-high-performance-animation'],

  rules: {
    'plugin/no-low-performance-animation-properties': [
      true,
      {
        ignore: 'paint-properties',
        ignoreProperties: [],
      },
    ],
  },
};
