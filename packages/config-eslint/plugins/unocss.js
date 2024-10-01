import plugin from '@unocss/eslint-config/flat';

/** @see [@unocss/eslint-config](https://unocss.dev/integrations/eslint) */
export const unocss = [
  plugin,
  {
    rules: {
      'unocss/order-attributify': 'off',
    },
  },
];
