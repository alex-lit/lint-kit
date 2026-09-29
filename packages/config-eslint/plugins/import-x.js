import plugin from 'eslint-plugin-import-x';
import { createNodeResolver } from 'eslint-plugin-import-x/node-resolver';
import { defineConfig } from 'eslint/config';

import { DATA_FILES, FILES, TEST_FILES, VUE_FILES } from '../base.js';

const EXTENSIONS = [
  '.ts',
  '.tsx',
  '.mts',
  '.cts',
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.vue',
  '.json',
];

/** @see [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) */
export const importX = defineConfig([
  // `recommended` comes without a `files` key, so it would also land on data
  // files, which are not modules and have nothing to import from.
  { ...plugin.flatConfigs.recommended, files: FILES, ignores: DATA_FILES },

  {
    files: FILES,
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    plugins: { 'import-x': plugin },
    rules: {
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/first': 'error',
      'import-x/newline-after-import': 'warn',
      'import-x/no-absolute-path': 'error',
      'import-x/no-cycle': 'error',
      'import-x/no-extraneous-dependencies': 'error',
      // Both come from `recommended`, but they are wrong for ESLint plugins:
      // the default export is the plugin object, so `plugin.configs` is a
      // property of it, not a named export of the package. Some packages even
      // export `plugin` as a named export, which makes `no-named-as-default`
      // fire on the conventional `import plugin from '…'` line.
      'import-x/no-named-as-default': 'off',
      'import-x/no-named-as-default-member': 'off',
      'import-x/no-nodejs-modules': 'off',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'import-x/unambiguous': 'error',
    },
    settings: {
      'import-x/extensions': EXTENSIONS,
      'import-x/parsers': { '.vue': ['vue-eslint-parser'] },
      // Reads `paths` from the closest `tsconfig.json`, so `~/…`, `@/…` and
      // other aliases are resolved the same way the bundler resolves them.
      'import-x/resolver-next': [
        createNodeResolver({ extensions: EXTENSIONS, tsconfig: 'auto' }),
      ],
    },
  },
  {
    files: TEST_FILES,
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        { devDependencies: true },
      ],
    },
  },

  {
    files: VUE_FILES,
    rules: {
      // A component without a `<script>` block is a valid component, not an
      // ambiguous module that needs explicit imports.
      'import-x/unambiguous': 'off',
    },
  },
]);
