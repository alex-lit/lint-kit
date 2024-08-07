import { omit } from 'radash';

const DEFAULT_PLUGINS = {
  /** @see [prettier-plugin-jsdoc](https://github.com/hosseinmd/prettier-plugin-jsdoc) */
  jsdoc: true,

  /** @see [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson) */
  packagejson: true,

  /** @see [plugin-pug](https://github.com/prettier/plugin-pug) */
  pug: true,

  /** @see [prettier-plugin-sh](https://github.com/astorije/prettier-plugin-sh) */
  sh: true,

  /** @see [prettier-plugin-solidity](https://github.com/prettier-solidity/prettier-plugin-solidity) */
  solidity: true,

  /** @see [prettier-plugin-sort-json](https://github.com/Gudahtt/prettier-plugin-sort-json) */
  'sort-json': true,

  /** @see [plugin-xml](https://github.com/prettier/plugin-xml) */
  xml: true,
};

const OPTIONAL_PLUGINS = {
  /** @see [plugin-php](https://github.com/prettier/plugin-php) */
  php: false,

  /** @see [plugin-ruby](https://github.com/prettier/plugin-ruby) */
  ruby: false,

  /** @see [prettier-plugin-sql](https://github.com/un-ts/prettier/tree/master/packages/sql) */
  sql: false,

  /** @see [prettier-plugin-svelte](https://github.com/sveltejs/prettier-plugin-svelte) */
  svelte: false,
};

const CODESTYLE_PLUGINS = {
  /** @see [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) */
  tailwindcss: false,
};

const PLUGINS = {
  ...DEFAULT_PLUGINS,
  ...OPTIONAL_PLUGINS,
  ...CODESTYLE_PLUGINS,
};

/**
 * Create plugins config list
 *
 * @param {PLUGINS} plugins Enabled/disabled plugins list
 *
 * @returns {import('prettier').Config} Prettier configuration
 */
const createPluginsConfig = async (plugins = {}) => {
  let pluginsConfig = { plugins: [] };

  const pluginEntries = Object.entries({ ...PLUGINS, ...plugins });

  for (const [name, isActive] of pluginEntries) {
    if (isActive) {
      const { default: config } = await import(
        `@alexlit/config-prettier/plugins/${name}.js`
      );

      if (config.plugins?.length > 0) {
        pluginsConfig.plugins.push(...config.plugins);
      }

      pluginsConfig = { ...pluginsConfig, ...omit(config, ['plugins']) };
    }
  }

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
    endOfLine: 'lf',

    plugins: [...pluginsConfig.plugins, ...(options.plugins ?? [])],

    proseWrap: 'always',
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'all',
    vueIndentScriptAndStyle: true,

    ...omit(pluginsConfig, ['plugins']),
    ...omit(options, ['plugins']),
  };
};
