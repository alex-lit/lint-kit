/**
 * Форматирует SQL-запросы
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sql](https://github.com/un-ts/prettier/tree/master/packages/sql)
 */
export const sql = (options = {}) => ({
  plugins: ['prettier-plugin-sql'],
  ...options,
});
