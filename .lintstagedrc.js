const eslint = 'eslint --fix';
const markdownlint = 'markdownlint --config .markdownlintrc.js --fix';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';

module.exports = {
  '*.json': [eslint, prettier],
  '*.md': [markdownlint, prettier],
  '*.php': [prettier],
  '*.rb': [prettier],
  '*.sh': [prettier],
  '*.xml': [prettier],
  '*.{css,pcss,postcss,sass,scss,vue}': [stylelint, prettier],
  '*.{js,ts,vue}': [eslint, prettier],
  '*.{yaml,yml}': [eslint, prettier],
};
