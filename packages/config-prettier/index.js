/* eslint-disable spellcheck/spell-checker, global-require */
module.exports = {
  endOfLine: 'lf',

  plugins: [
    '@prettier/plugin-php',
    '@prettier/plugin-pug',
    '@prettier/plugin-ruby',
    '@prettier/plugin-xml',

    'prettier-plugin-jsdoc',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-solidity',
    'prettier-plugin-sort-json',
    'prettier-plugin-sql',
    'prettier-plugin-svelte',

    'prettier-plugin-tailwindcss',
  ],

  proseWrap: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,

  ...require('./plugins/jsdoc'),
  ...require('./plugins/pug'),
  ...require('./plugins/sort-json'),
  ...require('./plugins/svelte'),
  ...require('./plugins/tailwindcss'),
  ...require('./plugins/xml'),
};
