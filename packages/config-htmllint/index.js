/** @see [linthtml](https://github.com/linthtml/linthtml/blob/develop/docs/rules.md) */
module.exports = {
  'attr-name-ignore-regex': false,
  extends: '@linthtml/linthtml-config-recommended',
  'id-class-ignore-regex': false,
  'line-max-len-ignore-regex': false,
  maxerr: false,
  'raw-ignore-regex': false,

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
  },

  'spec-char-escape': false,
  'text-ignore-regex': false,
};
