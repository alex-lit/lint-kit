/**
 * @see [plugin-ruby](https://github.com/prettier/plugin-ruby)
 * @see [prettier-plugin-eruby](https://github.com/ippachi/prettier-plugin-eruby)
 */
export default {
  overrides: [
    {
      files: '*.html.erb',
      options: {
        parser: 'eruby-parse',
      },
    },
  ],
  plugins: ['@prettier/plugin-ruby', 'prettier-plugin-eruby'],
};
