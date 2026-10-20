/**
 * Сортирует утилитарные классы Tailwind CSS по каноническому порядку
 *
 * @param {Partial<import('prettier').Config>} [options]
 *
 * @returns {import('prettier').Config}
 *
 * @see [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
 */
export const tailwindcss = (options = {}) => ({
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: [
    'classnames',
    'clsx',
    'cn',
    'ctl',
    'cva',
    'tv',
    'tw',
    'twMerge',
  ],
  ...options,
});
