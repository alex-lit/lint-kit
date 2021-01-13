const eslint = 'eslint --fix';
const markdownlint = 'markdownlint --fix';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix';

module.exports = {
  '*.{js,ts,vue},!./example/.eslintrc.js': [eslint, prettier],
  '*.{vue,pcss,scss,sass,css}': [stylelint, prettier],
  '*.{md}': [markdownlint, prettier],
};
