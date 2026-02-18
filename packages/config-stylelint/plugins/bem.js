/* eslint-disable unicorn/no-null */
import { createDefineRules } from '@morev/stylelint-plugin';

const defineRules = createDefineRules({
  separators: { element: '__', modifier: '--', modifierValue: '--' },
});

/**
 * @type {import('stylelint').Config}
 *
 * @see [@morev/stylelint-plugin](https://morevm.github.io/stylelint-plugin/)
 */
export default {
  overrides: [
    {
      files: ['**/*.{css,scss,vue}'],
      rules: defineRules({
        '@morev/base/no-selectors-in-at-rules': [true, {}],
        '@morev/bem/block-variable': [true, { name: 'self' }],
        '@morev/bem/match-file-name': [true, {}],
        '@morev/bem/no-block-properties': [
          true,
          { ignoreBlocks: [], presets: ['EXTERNAL_GEOMETRY', 'CONTEXT'] },
        ],
        '@morev/bem/no-chained-entities': [true, {}],
        '@morev/bem/no-side-effects': [true, { ignore: [] }],
        '@morev/bem/selector-pattern': [true, {}],
        '@morev/sass/no-unused-variables': [true, { ignore: ['self'] }],
      }),
    },
    {
      files: ['**/*.{css,scss}', '**/*.*.vue'],
      rules: defineRules({
        '@morev/bem/block-variable': null,
        '@morev/bem/match-file-name': null,
        '@morev/bem/no-side-effects': null,
      }),
    },
  ],
  plugins: ['@morev/stylelint-plugin'],
};
