import config from '@alexlit/config-stylelint';

export default {
  extends: ['@alexlit/config-stylelint'],
  ignoreFiles: [...config.ignoreFiles],
};
