import plugin from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

const DEFAULT_CSS_CONFIG_PATH = './styles/tailwind.css';

const recommended = plugin.configs.recommended;

/**
 * Правила для Tailwind CSS.
 *
 * @example
 *   import path from 'node:path';
 *   import { defineConfig, plugins } from '@alexlit/config-eslint';
 *
 *   export default defineConfig([
 *     plugins.tailwindcss({
 *       cssConfigPath: path.resolve(import.meta.dirname, 'src/styles.css'),
 *     }),
 *   ]);
 *
 * @param {import('eslint-plugin-tailwindcss').PluginSettings} [settings] -
 *   Настройки плагина `tailwindcss`. По умолчанию `cssConfigPath` равен
 *   `./styles/tailwind.css`.
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
 */
export const tailwindcss = (settings = {}) =>
  defineConfig([
    {
      ...recommended,
      files: FILES,
      rules: {
        ...recommended.rules,
        'tailwindcss/no-custom-classname': 'off',
        'vue/static-class-names-order': 'off',
      },
      settings: {
        ...recommended.settings,
        /** @type {import('eslint-plugin-tailwindcss').PluginSettings} */
        tailwindcss: {
          ...recommended.settings?.tailwindcss,
          cssConfigPath: DEFAULT_CSS_CONFIG_PATH,
          ...settings,
        },
      },
    },
  ]);
