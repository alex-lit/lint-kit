/**
 * Create linthtml config
 *
 * @param options LintHTML options
 *
 * @see [linthtml](https://github.com/linthtml/linthtml)
 */
export const createConfig = (options = {}) => ({
  'attr-name-ignore-regex': false,
  'id-class-ignore-regex': false,
  'line-max-len-ignore-regex': false,
  maxerr: false,
  'raw-ignore-regex': false,
  'spec-char-escape': false,
  'text-ignore-regex': false,

  ...options,

  extends: [
    '@linthtml/linthtml-config-recommended',
    ...(options.extends ?? []),
  ],

  ignoreFiles: [...(options.rules ?? [])],

  rules: {
    'attr-order': [true, ['id', 'class']],
    'attr-quote-style': [true, 'double'],
    'button-req-content': true,
    'class-style': [true, 'bem'],
    'fieldset-contains-legend': true,
    'focusable-tabindex-style': true,
    'id-class-no-ad': true,
    'id-style': [true, 'dash'],
    'indent-width': [true, 2],
    'input-btn-req-value-or-title': true,
    'label-no-enc-textarea-or-select': true,
    'label-req-for': true,
    'lang-style': [true, 'case'],
    'tag-name-match': true,
    'title-max-len': false,

    ...options.rules,
  },
});
