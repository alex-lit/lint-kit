const { FlatCompat } = require('@eslint/eslintrc');

const { extendSpellChecker } = require('./utils/extend-spell-checker');
const { createConfig } = require('./utils/create-config');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const createFlatConfig = () => [
  ...compat.extends('./legacy.js'),
  {
    ignores: ['.gitignore', '.eslintignore', '.prettierignore'],
  },
];

module.exports = { createConfig, extendSpellChecker, createFlatConfig };
