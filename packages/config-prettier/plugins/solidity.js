/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity)
 */
export const solidity = (options = {}) => ({
  plugins: ['prettier-plugin-solidity'],
  ...options,
});
