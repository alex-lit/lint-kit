/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json)
 */
export const sortJson = (options = {}) => ({
  jsonRecursiveSort: true,
  plugins: ['prettier-plugin-sort-json'],
  ...options,
});
