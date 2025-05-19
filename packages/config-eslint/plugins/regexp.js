import plugin from 'eslint-plugin-regexp';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp) */
export const regexp = [{ files: FILES, ...plugin.configs['flat/recommended'] }];
