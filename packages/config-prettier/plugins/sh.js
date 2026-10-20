/**
 * Форматирует shell-скрипты
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-sh](https://github.com/astorije/prettier-plugin-sh)
 */
export const sh = (options = {}) => ({
  plugins: ['prettier-plugin-sh'],
  ...options,
});
