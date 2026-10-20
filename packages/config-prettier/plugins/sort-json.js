/**
 * Рекурсивно сортирует ключи JSON-объектов
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json)
 */
export const sortJson = (options = {}) => ({
  jsonRecursiveSort: true,
  plugins: ['prettier-plugin-sort-json'],
  ...options,
});
