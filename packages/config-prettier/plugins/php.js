/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [plugin-php](https://github.com/prettier/plugin-php)
 */
export const php = (options = {}) => ({
  plugins: ['@prettier/plugin-php'],
  ...options,
});
