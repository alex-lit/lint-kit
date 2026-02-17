import {
  defaultPreset,
  prettierConfig,
  tailwindcss,
  tanstackQuery,
  vitest,
} from '@alexlit/config-eslint';

export default [
  ...defaultPreset,

  { ignores: ['packages/config-eslint/_legacy'] },

  { files: ['packages/**'], rules: { 'no-restricted-imports': 'off' } },

  ...tanstackQuery,
  ...vitest,

  ...tailwindcss,
  ...prettierConfig,
];
