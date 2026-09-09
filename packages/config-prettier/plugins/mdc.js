/** @see [prettier-plugin-mdc](https://github.com/so1ve/prettier-plugin-mdc) */
export default {
  overrides: [{ files: ['*.md'], options: { parser: 'mdc' } }],
  plugins: ['prettier-plugin-mdc'],
};
