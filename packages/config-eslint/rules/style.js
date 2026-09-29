/**
 * Formatting rules that survive `eslint-config-prettier`.
 *
 * `eslint-config-prettier` turns off every core formatting rule, so these two
 * are declared in a single place and re-applied by `prettier.js` to both
 * `prettier` and `prettierConfig`. Keep them in sync with `prettier.js`.
 */
export const STYLE_RULES = {
  curly: 'error',
  quotes: [
    'error',
    'single',
    { allowTemplateLiterals: false, avoidEscape: true },
  ],
};
