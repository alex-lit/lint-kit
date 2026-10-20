/**
 * Форматирует MDC-документы (Nuxt Content)
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-mdc](https://github.com/so1ve/prettier-plugin-mdc)
 */
export const mdc = (options = {}) => ({
  overrides: [{ files: ['*.md'], options: { parser: 'mdc' } }],
  plugins: ['prettier-plugin-mdc'],
  ...options,
});
