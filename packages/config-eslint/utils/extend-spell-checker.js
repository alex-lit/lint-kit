const dictionaries = require('../dictionaries');

/**
 * Extends 'spellcheck/spell-checker' config
 *
 * @param {Record<string, any>} options 'spellcheck/spell-checker' options
 * @param {'warn' | 'error'} level 'spellcheck/spell-checker' warnings level
 */
const extendSpellChecker = (options, level = 'warn') => [
  level,
  {
    ignoreRequire: true,
    minLength: 4,
    skipIfMatch: ['^@.*', '^plugin:.*'],
    skipWordIfMatch: [/^[\da-f]{3,6}$/, /^'/, /'$/],

    ...options,

    skipWords: [...dictionaries, ...(options?.skipWords ?? [])],
  },
];

module.exports = { extendSpellChecker };
