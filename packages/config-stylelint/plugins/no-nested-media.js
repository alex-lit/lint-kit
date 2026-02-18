/**
 * @type {import('stylelint').Config}
 *
 * @see [stylelint-no-nested-media](https://github.com/dkrnl/stylelint-no-nested-media)
 */
export default {
  plugins: ['stylelint-no-nested-media'],
  rules: { 'pitcher/no-nested-media': true },
};
