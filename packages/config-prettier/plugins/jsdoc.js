/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc)
 */
export const jsdoc = (options = {}) => ({
  jsdocCommentLineStrategy: 'singleLine',
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: true,
  plugins: ['prettier-plugin-jsdoc'],
  ...options,
});
