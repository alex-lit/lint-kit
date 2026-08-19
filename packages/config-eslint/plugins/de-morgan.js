import plugin from 'eslint-plugin-de-morgan';
import { defineConfig } from 'eslint/config';

/** @see [eslint-plugin-de-morgan](https://github.com/azat-io/eslint-plugin-de-morgan) */
export const deMorgan = defineConfig([plugin.configs.recommended]);
