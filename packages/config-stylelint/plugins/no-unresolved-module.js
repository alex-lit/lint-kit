/**
 * Проверяет разрешение импортов.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-no-unresolved-module](https://github.com/niksy/stylelint-no-unresolved-module)
 */
export const noUnresolvedModule = (options = {}) => ({
  plugins: ['stylelint-no-unresolved-module'],

  ...options,

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
    ...options.rules,
  },
});
