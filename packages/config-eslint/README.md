# ESLint Configuration

## Installation

```sh
npm i @alexlit/config-eslint -D
```

## Connection

```js
// .eslintrc.js
module.exports = {
  ...require('@alexlit/config-eslint'),
};
```

## Recipes

### Vue

- If you use vue.js with `options api` syntax you need to turn off `sort-keys`
  rule for `*.vue` files

  ```js
  // .eslintrc.js
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'sort-keys': 'off',
      },
    },
  ];
  ```

### Spell check

- Skip some words

  ```js
  // .eslintrc.js
  const SPELLCHECK_RULES = require('@alexlit/config-eslint/plugins/spellcheck')
    .rules['spellcheck/spell-checker'][1];

  module.exports = {
    rules: {
      'spellcheck/spell-checker': [
        'warn',
        {
          ...SPELLCHECK_RULES,

          skipWords: [...SPELLCHECK_RULES.skipWords, 'word1', 'word2'],
        },
      ],
    },
  };
  ```

- Disable spell checking

  ```js
  // .eslintrc.js
  module.exports = {
    rules: {
      'spellcheck/spell-checker': 'off',
    },
  };
  ```
