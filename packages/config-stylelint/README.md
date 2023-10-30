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
    '@alexlit/config-stylelint/plugins/optional/gamut',
    '@alexlit/config-stylelint/plugins/optional/no-indistinguishable-colors',
    '@alexlit/config-stylelint/plugins/optional/logical-css',
  ],

  ignoreFiles: [...require('@alexlit/config-stylelint').ignoreFiles],
};
```

## Development

- Check rules

  ```sh
  npx stylelint-find-new-rules
  ```
