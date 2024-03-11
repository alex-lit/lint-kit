/* eslint-disable no-console, import/extensions */

import { config } from './config.js';

const ADDITIONAL_PLUGINS = {
  /** @see [stylelint-a11y](https://github.com/double-great/stylelint-a11y) */
  a11y: true,

  /** @see [stylelint-at-rule-no-children](https://github.com/adityavm/stylelint-at-rule-no-children) */
  'at-rule-no-children': true,

  /** @see [stylelint-color-format](https://github.com/filipekiss/stylelint-color-format) */
  'color-format': true,

  /** @see [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties) */
  'declaration-block-no-ignored-properties': true,

  /** @see [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation) */
  'high-performance-animation': true,

  /** @see [stylelint-no-nested-media](https://github.com/dkrnl/stylelint-no-nested-media) */
  'no-nested-media': true,

  /** @see [stylelint-no-unresolved-module](https://github.com/niksy/stylelint-no-unresolved-module) */
  'no-unresolved-module': true,

  /** @see [stylelint-no-unsupported-browser-features](https://github.com/ismay/stylelint-no-unsupported-browser-features) */
  'no-unsupported-browser-features': true,

  /** @see [stylelint-order](https://github.com/hudochenkov/stylelint-order) */
  order: true,

  /** @see [stylelint-scss](https://github.com/kristerkari/stylelint-scss) */
  scss: true,

  /** @see [stylelint-selector-no-empty](https://github.com/ssivanatarajan/stylelint-selector-no-empty) */
  'selector-no-empty': true,

  /** @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting) */
  'use-nesting': true,

  /** @see [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) */
  vue: true,
};

const OPTIONAL_PLUGINS = {
  /** @see [stylelint-gamut](https://github.com/fpetrakov/stylelint-gamut) */
  gamut: false,

  /** @see [stylelint-plugin-logical-css](https://github.com/yuschick/stylelint-plugin-logical-css) */
  'logical-css': false,

  /** @see [stylelint-no-indistinguishable-colors](https://github.com/ierhyna/stylelint-no-indistinguishable-colors) */
  'no-indistinguishable-colors': false,
};

const PRETTIER_PLUGINS = {
  /** @see [stylelint-prettier](https://github.com/prettier/stylelint-prettier) */
  prettier: true,
};

const PLUGINS = {
  ...ADDITIONAL_PLUGINS,
  ...OPTIONAL_PLUGINS,
  ...PRETTIER_PLUGINS,
};

/**
 * Create "extends" field
 *
 * @param {PLUGINS} incomingPlugins Plugins
 */
const connectPlugins = (incomingPlugins = {}) => {
  const extendsPlugins = [];

  Object.entries({ ...PLUGINS, ...incomingPlugins })?.forEach(
    ([name, isActive]) => {
      if (isActive) {
        extendsPlugins.push(`@alexlit/config-stylelint/plugins/${name}`);
      }
    },
  );

  return extendsPlugins;
};

/**
 * Create stylelint config
 *
 * @param {PLUGINS} incomingPlugins Plugins
 * @param {import('stylelint').Config} incomingConfig Stylelint config
 */
const createConfig = (incomingPlugins = {}, incomingConfig = {}) => ({
  ...incomingConfig,

  extends: [
    'stylelint-config-standard',
    ...connectPlugins(incomingPlugins),
    ...(incomingConfig.extends ?? []),
  ],

  ignoreFiles: [
    ...(config.ignoreFiles ?? []),
    ...(incomingConfig.ignoreFiles ?? []),
  ],

  plugins: [...(config.plugins ?? []), ...(incomingConfig.plugins ?? [])],

  rules: { ...config.rules, ...incomingConfig.rules },
});

export { createConfig };
