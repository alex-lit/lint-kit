import plugin from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

import { FILES } from '../presets/base.js';

/**
 * @example
 *   import path from 'node:path';
 *
 *   tailwindcss({
 *     cssConfigPath: path.resolve(import.meta.dirname, 'src/tailwind.css'),
 *   });
 *
 * @param settings {import('eslint-plugin-tailwindcss').PluginSettings}
 *
 * @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
 */
export const tailwindcss = (settings) =>
  defineConfig([
    {
      files: FILES,
      plugins: { tailwindcss: plugin },
      rules: {
        ...plugin.configs.recommended.rules,
        'tailwindcss/no-custom-classname': 'off',
        'vue/static-class-names-order': 'off',
      },
      settings: {
        /** @type {import('eslint-plugin-tailwindcss').PluginSettings} */
        tailwindcss: { cssConfigPath: './styles/tailwind.css', ...settings },
      },
    },
  ]);
