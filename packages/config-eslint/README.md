# ESLint Configuration

## Installation

```sh
npm i @alexlit/config-eslint -D
```

## Connection

- Default
  ([see plugins enabled by default](https://github.com/alex-lit/lint-kit/blob/master/packages/config-eslint/index.js))

  ```js
  // .eslintrc.js
  const { createConfig } = require('@alexlit/config-eslint');

  module.exports = createConfig();
  ```

- Custom

  ```js
  // .eslintrc.js
  import { createConfig, extendSpellChecker } from '@alexlit/config-eslint';

  module.exports = createConfig(
    {
      // disable some default plugins
      vitest: false,

      // enable some optional plugins
      node: true,
    },
    {
      // add custom rules
      rules: {
        'no-implicit-coercion': 'warn',
        'spellcheck/spell-checker': extendSpellChecker({
          skipWords: ['word1', 'word2'],
        }),
      },
    },
  );
  ```
