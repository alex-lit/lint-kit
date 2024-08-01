import plugin from 'typescript-eslint';

/** @see [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) */
export const typescript = [
  ...plugin.configs.strict,
  ...plugin.configs.stylistic,
];
