import {
  defaultPreset,
  prettierConfig,
  tailwindcss,
  tanstackQuery,
  vitest,
  zod,
} from '@alexlit/config-eslint';
import path from 'node:path';

export default [
  ...defaultPreset,

  { ignores: ['packages/config-eslint/_legacy'] },

  { files: ['packages/**'], rules: { 'no-restricted-imports': 'off' } },

  ...tanstackQuery,
  ...vitest,
  ...zod,

  ...tailwindcss({
    cssConfigPath: path.resolve(
      import.meta.dirname,
      'examples/css.tailwind.css',
    ),
  }),
  ...prettierConfig,

  { rules: { 'unicorn/comment-content': ['warn'] } },
];
