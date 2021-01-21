module.exports = {
  extends: ['./packages/config-stylelint'],

  ignoreFiles: [...require('./packages/config-stylelint').ignoreFiles],
};
