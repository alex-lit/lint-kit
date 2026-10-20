/**
 * Требует использования CSS-вложенности.
 *
 * @param {Partial<import('stylelint').Config>} [options] — опции, накладываемые
 *   поверх значений по умолчанию (shallow merge)
 *
 * @returns {import('stylelint').Config}
 *
 * @see [stylelint-use-nesting](https://github.com/csstools/stylelint-use-nesting)
 */
export const useNesting = (options = {}) => ({
  plugins: ['stylelint-use-nesting'],

  ...options,

  rules: {
    'csstools/use-nesting': ['always', { except: [], syntax: 'scss' }],
    ...options.rules,
  },
});
