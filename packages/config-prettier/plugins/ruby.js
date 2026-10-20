/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
 *
 * @see [plugin-ruby](https://github.com/prettier/plugin-ruby)
 * @see [prettier-plugin-eruby](https://github.com/ippachi/prettier-plugin-eruby)
 */
export const ruby = (options = {}) => ({
  overrides: [{ files: '*.html.erb', options: { parser: 'eruby-parse' } }],
  plugins: ['@prettier/plugin-ruby', 'prettier-plugin-eruby'],
  ...options,
});
