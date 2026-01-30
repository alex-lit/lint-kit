import {
  defaultPreset,
  prettierConfig,
  tailwindcss,
} from '@alexlit/config-eslint';

export default [
  ...defaultPreset,

  { ignores: ['packages/config-eslint/_legacy'] },

  { files: ['packages/**'], rules: { 'no-restricted-imports': 'off' } },

  ...tailwindcss,
  ...prettierConfig,
];
