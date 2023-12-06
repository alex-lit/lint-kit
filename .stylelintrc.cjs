const config = require('@alexlit/config-stylelint');

module.exports = {
  extends: ['@alexlit/config-stylelint'],
  ignoreFiles: [...config.ignoreFiles],
};
