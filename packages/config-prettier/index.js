import { omit } from 'radash';

const DEFAULT_PLUGINS = {
  'jsdoc': true,
  'mdc': true,
  'packagejson': true,
  'pug': true,
  'sh': true,
  'solidity': true,
  'sort-json': true,
  'xml': true,
};

const OPTIONAL_PLUGINS = {
  php: false,
  ruby: false,
  sql: false,
  tailwindcss: false,
};

const PLUGINS = { ...DEFAULT_PLUGINS, ...OPTIONAL_PLUGINS };

/**
 * Create plugins config list
 *
 * @param {PLUGINS} plugins Enabled/disabled plugins list
 *
 * @returns {import('prettier').Config} Prettier configuration
 */
const createPluginsConfig = async (plugins = {}) => {
  const pluginEntries = Object.entries({ ...PLUGINS, ...plugins });

  const configs = await Promise.all(
    pluginEntries
      .filter(([, isActive]) => isActive)
      .map(async ([name]) => {
        const { default: config } = await import(
          `@alexlit/config-prettier/plugins/${name}.js`
        );

        return config;
      }),
  );

  let pluginsConfig = { overrides: [], plugins: [] };

  configs.forEach((config) => {
    if (config.plugins?.length > 0) {
      pluginsConfig.plugins.push(...config.plugins);
    }

    if (config.overrides?.length > 0) {
      pluginsConfig.overrides.push(...config.overrides);
    }

    pluginsConfig = {
      ...pluginsConfig,
      ...omit(config, ['plugins', 'overrides']),
    };
  });

  return pluginsConfig;
};

/**
 * Create prettier config
 *
 * @param {PLUGINS} plugins
 * @param {import('prettier').Config} options Prettier options
 *
 * @returns {import('prettier').Config} Prettier configuration
 */
export const createConfig = async (plugins = {}, options = {}) => {
  const pluginsConfig = await createPluginsConfig(plugins);

  return {
    bracketSameLine: false,
    endOfLine: 'lf',
    objectWrap: 'collapse',
    overrides: [
      ...(pluginsConfig.overrides ?? []),
      ...(options.overrides ?? []),
    ],
    plugins: [...(pluginsConfig.plugins ?? []), ...(options.plugins ?? [])],
    proseWrap: 'always',
    quoteProps: 'consistent',
    singleAttributePerLine: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    vueIndentScriptAndStyle: true,

    ...omit(pluginsConfig, ['plugins']),
    ...omit(options, ['plugins']),
  };
};
