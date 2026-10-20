/**
 * Форматирует контракты Solidity
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity)
 */
export const solidity = (options = {}) => ({
  plugins: ['prettier-plugin-solidity'],
  ...options,
});
