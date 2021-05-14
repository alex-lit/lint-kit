module.exports = {
  extends: ['@alexlit/config-stylelint'],

  ignoreFiles: [
    ...require('@alexlit/config-stylelint/.stylelintrc').ignoreFiles,
  ],
};
