const eslint = 'eslint --fix';
const htmllint = 'linthtml';
const markdownlint = 'markdownlint --config .markdownlintrc.js --fix';
const npmlint = 'npmPkgJsonLint';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';
const jscpd = 'jscpd';

module.exports = {
  '*.css': [stylelint, prettier],
  '*.html': [htmllint, prettier],
  '*.jade': [prettier],
  '*.js': [eslint, prettier],
  '*.json': [prettier],
  '*.jsx': [eslint, prettier],
  '*.md': [prettier, markdownlint],
  '*.mjs': [eslint, prettier],
  '*.pcss': [stylelint, prettier],
  '*.php': [prettier],
  '*.postcss': [stylelint, prettier],
  '*.pug': [prettier],
  '*.rb': [prettier],
  '*.sass': [stylelint, prettier],
  '*.scss': [stylelint, prettier],
  '*.sh': [prettier],
  '*.sol': [prettier],
  '*.svg': [prettier],
  '*.ts': [eslint, prettier],
  '*.tsx': [eslint, prettier],
  '*.twig': [prettier],
  '*.vue': [eslint, stylelint, prettier, jscpd],
  '*.xml': [prettier],
  '*.yaml': [prettier],
  '*.yml': [prettier],
  'package.json': [npmlint],
};
