/**
 * Форматирует Pug-шаблоны с сортировкой атрибутов и одинарными кавычками
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-pug](https://github.com/prettier/plugin-pug)
 */
export const pug = (options = {}) => ({
  plugins: ['@prettier/plugin-pug'],
  pugCommentPreserveSpaces: 'trim-all',
  pugSingleQuote: false,
  pugSortAttributes: 'asc',
  pugWrapAttributesThreshold: 3,
  ...options,
});
