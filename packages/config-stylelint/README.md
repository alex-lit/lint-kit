# StyleLint Configuration

## Installation

```sh
npm i @alexlit/config-stylelint -D
```

## Connection

```js
// .stylelintrc.js
module.exports = {
  extends: [
    '@alexlit/config-stylelint',

    /* optional */
    '@alexlit/config-stylelint/plugins/optional/no-indistinguishable-colors',
    '@alexlit/config-stylelint/plugins/optional/use-logical-spec',
  ],

  ignoreFiles: [...require('@alexlit/config-stylelint').ignoreFiles],
};
```

## Development

- Check rules

  ```sh
  npx stylelint-find-new-rules
  ```

- Check rules that are in conflict with Prettier

  ```sh
  npx stylelint-config-prettier-check
  ```
