/** @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut) */
module.exports = {
  plugins: ['stylelint-gamut'],

  rules: {
    'gamut/color-no-out-gamut-range': true,
  },
};
