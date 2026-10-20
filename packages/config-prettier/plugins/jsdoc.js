/**
 * Нормализует JSDoc-комментарии
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
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
