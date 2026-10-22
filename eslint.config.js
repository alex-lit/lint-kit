import { defineConfig, plugins } from '@alexlit/config-eslint';
import path from 'node:path';

export default defineConfig([
  ...plugins.javascript(),
  ...plugins.deMorgan(),
  ...plugins.importX(),
  ...plugins.jsdoc(),
  ...plugins.json(),
  ...plugins.perfectionist(),
  ...plugins.regexp(),
  ...plugins.sonar(),
  ...plugins.stylistic(),
  ...plugins.typescriptTypeChecked(),
  ...plugins.unicorn(),
  ...plugins.vue(),
  ...plugins.vueAccessibility(),
  ...plugins.vueI18n(),
  ...plugins.tanstackQuery(),
  ...plugins.vitest(),
  ...plugins.zod(),
  ...plugins.tailwindcss({
    cssConfigPath: path.resolve(
      import.meta.dirname,
      'examples/css.tailwind.css',
    ),
  }),

  { files: ['**/*.js'], rules: { 'no-restricted-imports': 'off' } },

  ...plugins.prettierConfig(),
]);
