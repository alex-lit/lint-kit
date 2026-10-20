/**
 * Форматирует XML-файлы
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [plugin-xml](https://github.com/prettier/plugin-xml)
 */
export const xml = (options = {}) => ({
  plugins: ['@prettier/plugin-xml'],
  xmlWhitespaceSensitivity: 'ignore',
  ...options,
});
