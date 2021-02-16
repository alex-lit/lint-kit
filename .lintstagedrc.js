const eslint = 'eslint --fix';
const markdownlint = 'markdownlint --config .markdownlintrc.js --fix';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';

module.exports = {
  '*.css': [stylelint, prettier],
  '*.html': [prettier],
  '*.jade': [prettier],
  '*.js': [eslint, prettier],
  '*.json': [prettier],
  '*.jsx': [eslint, prettier],
  '*.md': [prettier, markdownlint],
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
};
