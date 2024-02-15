/* eslint-disable spellcheck/spell-checker, import/extensions */
import jsdoc from './plugins/jsdoc.js';
import pug from './plugins/pug.js';
import sortJson from './plugins/sort-json.js';
import xml from './plugins/xml.js';

export default {
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
    // 'prettier-plugin-svelte',
    // 'prettier-plugin-tailwindcss',
  ],

  proseWrap: 'always',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  vueIndentScriptAndStyle: true,

  ...jsdoc,
  ...pug,
  ...sortJson,
  // ...svelte,
  // ...tailwindcss,
  ...xml,
};
