const { extendSpellChecker } = require('../utils/extend-spell-checker');

module.exports = {
  plugins: ['spellcheck'],

  rules: {
    'spellcheck/spell-checker': extendSpellChecker(),
  },
};
