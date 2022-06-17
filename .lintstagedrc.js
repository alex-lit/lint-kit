/* eslint-disable vue/sort-keys */
const eslint = 'eslint --fix';
const htmllint = 'linthtml';
const lockfilelint = 'lockfile-lint --type npm --path package-lock.json';
const markdownlint = 'markdownlint --config .markdownlintrc.js --fix';
const npmlint = 'npmPkgJsonLint';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';

module.exports = {
  '*.cjs': [eslint, prettier],
  '*.css': [stylelint, prettier],
  '*.cts': [eslint, prettier],
  '*.erb': [prettier],
  '*.html': [htmllint, prettier],
  '*.jade': [prettier],
  '*.js': [eslint, prettier],
  '*.json,!package-lock.json': [prettier],
  '*.jsx': [eslint, prettier],
  '*.md': [prettier, markdownlint],
  '*.mjs': [eslint, prettier],
  '*.mts': [eslint, prettier],
  '*.pcss': [stylelint, prettier],
  '*.php': [prettier],
  '*.postcss': [stylelint, prettier],
  '*.pug': [prettier],
  '*.rb': [prettier],
  '*.sass': [stylelint, prettier],
  '*.scss': [stylelint, prettier],
  '*.sh': [prettier],
  '*.sol': [prettier],
  '*.sql': [prettier],
  // '*.svg': [prettier], bug - clear all new svg files in some unknown cases
  '*.ts': [eslint, prettier],
  '*.tsx': [eslint, prettier],
  '*.twig': [prettier],
  '*.vue': [eslint, stylelint, prettier],
  '*.xml': [prettier],
  '*.yaml': [prettier],
  '*.yml': [prettier],
  'package-lock.json': [lockfilelint],
  // eslint-disable-next-line sort-keys
  'package.json': [npmlint],
};
