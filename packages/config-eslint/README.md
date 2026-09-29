# ESLint Configuration

> [!WARNING]  
> For **eslint version < 9** use
> [@alexlit/config-eslint@90](https://www.npmjs.com/package/@alexlit/config-eslint?activeTab=versions)
> or lower.

There are no presets: `base` only provides the shared file scope, ignore
patterns and globals. Every plugin is enabled explicitly, so you pay only for
what you use.

## Installation

```sh
npm i @alexlit/config-eslint -D
```

## Connection

Always start with `base` (it must be first) and finish with `prettierConfig` (it
must be last, it disables the formatting rules).

```js
// eslint.config.js
import {
  // foundation
  base,

  // plugins
  deMorgan,
  javascript,
  jsdoc,
  json,
  perfectionist,
  prettierConfig,
  regexp,
  sonar,
  stylistic,
  typescript,
  unicorn,

  // framework plugins
  pinia,
  tailwindcss,
  tanstackQuery,
  unocss,
  vitest,
  vue,
  vueAccessibility,
  vueI18n,
  zod,
} from '@alexlit/config-eslint';

export default [
  ...base, // must be first

  ...deMorgan,
  ...javascript,
  ...jsdoc,
  ...json,
  ...perfectionist,
  ...prettierConfig,
  ...regexp,
  ...sonar,
  ...stylistic,
  ...typescript,
  ...unicorn,

  ...pinia,
  ...tanstackQuery,
  ...unocss,
  ...vitest,
  ...vue,
  ...vueAccessibility,
  ...vueI18n,
  ...zod,

  // `tailwindcss` is the only plugin exported as a factory, because it needs a path to your CSS entrypoint
  ...tailwindcss({ cssConfigPath: './src/assets/css/main.css' }),

  ...prettierConfig, // must be last

  // Custom rules example
  // { files: ['**/*.js'], rules: { 'no-console': 'off' } },
];
```

Drop what you do not need.

## Usefull links

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
