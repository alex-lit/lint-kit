/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson)
 */
export const packageJson = (options = {}) => ({
  plugins: ['prettier-plugin-packagejson'],
  ...options,
});
