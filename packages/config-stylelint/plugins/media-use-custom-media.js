/**
 * Фабрика конфига плагина «используй кастомные медиа-запросы».
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-media-use-custom-media](https://github.com/csstools/stylelint-media-use-custom-media)
 */
export const mediaUseCustomMedia = (options = {}) => ({
  plugins: ['stylelint-media-use-custom-media'],

  ...options,

  rules: { 'csstools/media-use-custom-media': 'always', ...options.rules },
});
