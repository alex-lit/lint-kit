/**
 * Сортирует ключи в package.json
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)
 */
export const packageJson = (options = {}) => ({
  plugins: ['prettier-plugin-packagejson'],
  ...options,
});
