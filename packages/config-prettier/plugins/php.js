/**
 * Форматирует PHP-файлы
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-php](https://github.com/prettier/plugin-php)
 */
export const php = (options = {}) => ({
  plugins: ['@prettier/plugin-php'],
  ...options,
});
