/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-sql](https://github.com/un-ts/prettier/tree/master/packages/sql)
 */
export const sql = (options = {}) => ({
  plugins: ['prettier-plugin-sql'],
  ...options,
});
