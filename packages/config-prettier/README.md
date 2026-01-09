# Prettier Configuration

## Installation

```sh
npm i @alexlit/config-prettier -D
```

## Connection

- Default
  ([see plugins enabled by default](https://github.com/alex-lit/lint-kit/blob/master/packages/config-prettier/index.js#L5))

  ```js
  // prettier.config.js
  import { createConfig } from '@alexlit/config-prettier';

  export default createConfig();
  ```

- Custom

  ```js
  // prettier.config.js
  import { createConfig } from '@alexlit/config-prettier';

  export default createConfig({
    php: true,
    ruby: true,
    sql: false,
    tailwindcss: false,
  });
  ```

## Issues

- **tailwindcss** conflicts with **jsdoc**
