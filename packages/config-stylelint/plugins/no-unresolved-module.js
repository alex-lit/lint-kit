import { mergeConfigs } from '../utils/merge-configs.js';

const DEFAULTS = {
  plugins: ['stylelint-no-unresolved-module'],
  rules: {
    'plugin/no-unresolved-module': {
      alias: { '~assets': 'assets', '~public': 'public', '~static': 'static' },
      modules: [
        'assets',
        'node_modules',
        'public',
        'src',
        'src/assets',
        'src/public',
        'src/static',
        'static',
      ],
    },
  },
};

/**
 * Проверяет разрешение импортов.
 *
 * @param {Partial<import('stylelint').Config>} [options]
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-unresolved-module](https://github.com/niksy/stylelint-no-unresolved-module)
 */
export const noUnresolvedModule = (options = {}) =>
  mergeConfigs(DEFAULTS, options);
