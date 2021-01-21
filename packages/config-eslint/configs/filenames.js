/**
 * [Plugin documentation](https://github.com/selaux/eslint-plugin-filenames)
 */
module.exports = {
  plugins: ['filenames'],

  rules: {
    'filenames/match-regex': ['error', /^(\.?[a-z-]+)+$/, true],
    'filenames/match-exported': ['error', 'kebab', /\.([a-z-]+\.?)+$/],
  },
};
