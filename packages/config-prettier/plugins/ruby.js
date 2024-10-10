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
