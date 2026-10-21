import plugin from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

const DEFAULT_CSS_CONFIG_PATH = './styles/tailwind.css';

/**
 * Правила для Tailwind CSS.
 *
 * Опция `cssConfigPath` - путь к CSS-файлу с Tailwind-конфигурацией. Остальные
 * опции - произвольные flat-опции ESLint, они добавляются отдельным блоком.
 *
 * @example
 *   import path from 'node:path';
 *
 *   plugins.tailwindcss({
 *     cssConfigPath: path.resolve(import.meta.dirname, 'src/tailwind.css'),
 *   });
 *
 * @param {import('eslint').Linter.Config & { cssConfigPath?: string }} [options]
 *   - Дополнительные flat-опции
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
 */
export const tailwindcss = (options = {}) => {
  const { cssConfigPath, ...flat } = options;

  return defineConfig([
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
        tailwindcss: {
          cssConfigPath: DEFAULT_CSS_CONFIG_PATH,
          ...(cssConfigPath !== undefined && { cssConfigPath }),
        },
      },
    },

    ...(Object.keys(flat).length > 0 ? [flat] : []),
  ]);
};
