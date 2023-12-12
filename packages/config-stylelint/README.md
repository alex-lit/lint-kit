# StyleLint Configuration

## Installation

```sh
npm i @alexlit/config-stylelint -D
```

## Connection

```js
// .stylelintrc.js
import config from '@alexlit/config-stylelint';

export default {
  extends: [
    '@alexlit/config-stylelint',

    /* optional */
    '@alexlit/config-stylelint/plugins/optional/gamut',
    '@alexlit/config-stylelint/plugins/optional/no-indistinguishable-colors',
    '@alexlit/config-stylelint/plugins/optional/logical-css',
  ],
  ignoreFiles: [...config.ignoreFiles],
};
```

## Development

- Check rules

  ```sh
  npx stylelint-find-new-rules
  ```
