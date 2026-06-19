import {
  defaultPreset,
  prettierConfig,
  tailwindcss,
  tanstackQuery,
  vitest,
  zod,
} from '@alexlit/config-eslint';

export default [
  ...defaultPreset,

  { ignores: ['packages/config-eslint/_legacy'] },

  { files: ['packages/**'], rules: { 'no-restricted-imports': 'off' } },

  ...tanstackQuery,
  ...vitest,
  ...zod,

  ...tailwindcss,
  ...prettierConfig,
];
