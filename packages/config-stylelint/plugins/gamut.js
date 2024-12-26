/** @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut) */
export default {
  plugins: ['stylelint-gamut'],

  rules: {
    'gamut/color-no-out-gamut-range': true,
  },
};
