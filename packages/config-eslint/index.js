const { FlatCompat } = require('@eslint/eslintrc');

const { createConfig } = require('./utils/create-config');
const { extendSpellChecker } = require('./utils/extend-spell-checker');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const createFlatConfig = () => [...compat.extends('./legacy.js')];

module.exports = { createConfig, createFlatConfig, extendSpellChecker };
