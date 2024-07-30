/* eslint-disable unicorn/prevent-abbreviations */
module.exports = {
  extends: ['plugin:array-func/all'],

  plugins: ['array-func'],

  rules: {
    // delegate to eslint-plugin-unicorn
    'array-func/no-unnecessary-this-arg': 'off',

    // delegate to eslint-plugin-unicorn
    'array-func/prefer-array-from': 'off',

    // delegate to eslint-plugin-unicorn
    'array-func/prefer-flat': 'off',

    // delegate to eslint-plugin-unicorn
    'array-func/prefer-flat-map': 'off',
  },
};
