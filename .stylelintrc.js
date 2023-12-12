import config from '@alexlit/config-stylelint';

export default {
  extends: [
    '@alexlit/config-stylelint',

    /* optional */
    '@alexlit/config-stylelint/plugins/optional/gamut',
    // '@alexlit/config-stylelint/plugins/optional/no-indistinguishable-colors',
    '@alexlit/config-stylelint/plugins/optional/logical-css',
  ],

  ignoreFiles: [...config.ignoreFiles],
};
