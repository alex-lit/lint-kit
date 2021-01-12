module.exports = {
  '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
  '*.{vue,pcss,scss,sass,css}': ['stylelint --fix', 'prettier --write'],
  '*.{md}': ['markdownlint --fix', 'prettier --write'],
};
