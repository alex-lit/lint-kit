/**
 * @type {import('stylelint').Config}
 *
 * @see [stylelint-media-use-custom-media](https://github.com/csstools/stylelint-media-use-custom-media)
 */
export default {
  plugins: ['stylelint-media-use-custom-media'],
  rules: { 'csstools/media-use-custom-media': 'always' },
};
