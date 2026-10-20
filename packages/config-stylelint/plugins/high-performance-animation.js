/**
 * Фабрика конфига плагина, запрещающего анимации, нагружающие рендеринг.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-high-performance-animation](https://github.com/kristerkari/stylelint-high-performance-animation)
 */
export const highPerformanceAnimation = (options = {}) => ({
  plugins: ['stylelint-high-performance-animation'],

  ...options,

  rules: {
    'plugin/no-low-performance-animation-properties': [
      true,
      { ignore: 'paint-properties', ignoreProperties: [] },
    ],
    ...options.rules,
  },
});
