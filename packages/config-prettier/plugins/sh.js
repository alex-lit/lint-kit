/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-sh](https://github.com/astorije/prettier-plugin-sh)
 */
export const sh = (options = {}) => ({
  plugins: ['prettier-plugin-sh'],
  ...options,
});
