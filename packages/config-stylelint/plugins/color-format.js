/**
 * TODO: update plugin from ^1.1.0
 *
 * @type {import('stylelint').Config}
 *
 * @see [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format)
 */
export default {
  plugins: ['stylelint-color-format'],
  rules: { 'color-format/format': { format: 'rgb' } },
};
