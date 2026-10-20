/**
 * @param {Partial<import('prettier').Config>} [options] Plugin options
 *
 * @returns {import('prettier').Config} Plugin config
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
