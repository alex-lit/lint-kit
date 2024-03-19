# HTMLLint Configuration

## Installation

```sh
npm i @alexlit/config-htmllint -D
```

## Connection

- Default
  ([see rules enabled by default](https://github.com/alex-lit/lint-kit/blob/master/packages/config-htmllint/index.js))

  ```js
  // linthtml.config.js
  import { createConfig } from '@alexlit/config-htmllint';

  export default createConfig();
  ```

- Custom

  ```js
  // linthtml.config.js
  import { createConfig } from '@alexlit/config-htmllint';

  export default createConfig({
    'attr-name-ignore-regex': false,

    rules: {
      'indent-width': [true, 4],
    },
  });
  ```

## VSCode extention

[vscode-linthtml](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-linthtml)
