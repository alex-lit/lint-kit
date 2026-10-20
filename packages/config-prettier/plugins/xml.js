/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [plugin-xml](https://github.com/prettier/plugin-xml)
 */
export const xml = (options = {}) => ({
  plugins: ['@prettier/plugin-xml'],
  xmlWhitespaceSensitivity: 'ignore',
  ...options,
});
