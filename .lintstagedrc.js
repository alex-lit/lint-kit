const eslint = 'eslint --fix';
const htmllint = 'linthtml';
const npmpackagejsonlint = 'npmPkgJsonLint';
const markdownlint = 'markdownlint --config .markdownlintrc.js --fix';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';

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
  '*.ts': [eslint, prettier],
  '*.tsx': [eslint, prettier],
  '*.twig': [prettier],
  '*.vue': [eslint, stylelint, prettier],
  '*.xml': [prettier],
  '*.yaml': [prettier],
  '*.yml': [prettier],
  'package.json': [npmpackagejsonlint],
};
