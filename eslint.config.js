import {
  base,
  deMorgan,
  importX,
  javascript,
  jsdoc,
  json,
  perfectionist,
  prettierConfig,
  regexp,
  sonar,
  stylistic,
  tailwindcss,
  tanstackQuery,
  typescriptTypeChecked,
  unicorn,
  vitest,
  vue,
  vueAccessibility,
  vueI18n,
  zod,
} from '@alexlit/config-eslint';
import path from 'node:path';

export default [
  ...base, // must be first

  ...javascript,
  ...deMorgan,
  ...importX,
  ...jsdoc,
  ...json,
  ...perfectionist,
  ...regexp,
  ...sonar,
  ...stylistic,
  ...typescriptTypeChecked,
  ...unicorn,
  ...vue,
  ...vueAccessibility,
  ...vueI18n,

  ...tanstackQuery,
  ...vitest,
  ...zod,

  ...tailwindcss({
    cssConfigPath: path.resolve(
      import.meta.dirname,
      'examples/css.tailwind.css',
    ),
  }),

  ...prettierConfig, // must be last

  { ignores: ['**/packages/config-eslint/_legacy/**'] },

  {
    files: ['**/*.js'],
    rules: {
      'no-restricted-imports': 'off',
      'unicorn/comment-content': ['warn'],
    },
  },
];
