import plugin from '@unocss/eslint-config/flat';

import { FILES } from '../presets/base.js';

/** @see [@unocss/eslint-config](https://unocss.dev/integrations/eslint) */
export const unocss = [
  { files: FILES, ...plugin },
  { files: FILES, rules: { 'unocss/order-attributify': 'off' } },
];
