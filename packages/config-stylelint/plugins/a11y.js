/* eslint-disable unicorn/no-null */

/**
 * Фабрика конфига плагина доступности.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-a11y](https://github.com/double-great/stylelint-a11y)
 */
export const a11y = (options = {}) => {
  const baseConfig = {
    plugins: ['@double-great/stylelint-a11y'],
    rules: {
      'a11y/media-prefers-reduced-motion': null,
      'a11y/no-obsolete-attribute': true,
      'a11y/no-obsolete-element': true,
      'a11y/no-outline-none': true,
      'a11y/no-text-align-justify': true,
      'a11y/selector-pseudo-class-focus': true,
    },
  };

  return {
    ...baseConfig,
    ...options,
    rules: { ...baseConfig.rules, ...options.rules },
  };
};
