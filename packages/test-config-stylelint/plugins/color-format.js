/** @see [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) */
module.exports = {
  plugins: ['stylelint-color-format'],

  rules: {
    'color-format/format': {
      format: 'rgb',
    },
  },
};
