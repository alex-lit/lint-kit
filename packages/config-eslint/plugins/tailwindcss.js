import plugin from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';

import { FILES } from '../base.js';

const DEFAULT_CSS_CONFIG_PATH = './styles/tailwind.css';

const recommended = plugin.configs.recommended;

/**
 * Правила для Tailwind CSS.
 *
 * @param {import('eslint').Linter.Config | import('eslint').Linter.Config[]} [config]
 *   Например, чтобы переопределить путь к CSS-файлу Tailwind:
 *
 *   ```js
 *   plugins.tailwindcss({
 *     settings: {
 *       tailwindcss: {
 *         cssConfigPath: path.resolve(import.meta.dirname, 'src/main.css'),
 *       },
 *     },
 *   });
 *   ```
 *
 * @returns {import('eslint').Linter.Config[]}
 *
 * @see [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
 */
export const tailwindcss = (config = []) =>
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
        tailwindcss: { cssConfigPath: DEFAULT_CSS_CONFIG_PATH },
      },
    },

    config,
  ]);
