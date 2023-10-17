const skipWords = require('../dictionaries');

/** @see [eslint-plugin-spellcheck](https://github.com/aotaduy/eslint-plugin-spellcheck) */
module.exports = {
  plugins: ['spellcheck'],

  rules: {
    'spellcheck/spell-checker': [
      'warn',
      {
        ignoreRequire: true,
        minLength: 4,
        skipIfMatch: ['^@.*', '^plugin:.*'],
        skipWordIfMatch: [/^[\da-f]{3,6}$/, /^'/, /'$/],
        skipWords,
      },
    ],
  },
};
