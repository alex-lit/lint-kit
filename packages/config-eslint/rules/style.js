/**
 * Правила форматирования, которые должны пережить `eslint-config-prettier`.
 *
 * `eslint-config-prettier` отключает все основные правила форматирования,
 * поэтому эти два правила объявлены в одном месте. `javascript.js` включает их
 * как базовые, а `prettier.js` повторно применяет после
 * `eslint-config-prettier`.
 */
export const STYLE_RULES = {
  curly: 'error',
  quotes: [
    'error',
    'single',
    { allowTemplateLiterals: false, avoidEscape: true },
  ],
};
