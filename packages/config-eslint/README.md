# ESLint Configuration

> [!WARNING]  
> For **eslint version < 9** use
> [@alexlit/config-eslint@90](https://www.npmjs.com/package/@alexlit/config-eslint?activeTab=versions)
> or lower.

## Installation

```sh
npm i @alexlit/config-eslint -D
```

## Connection

- Default

  ```js
  // eslint.config.js
  import { config } from '@alexlit/config-eslint';

  export default [...config];
  ```

- Pick some plugins
  ([available plugins](https://github.com/alex-lit/lint-kit/blob/master/packages/config-eslint/index.js))

  ```js
  // eslint.config.js
  import { typescript, unicorn, vitest } from '@alexlit/config-eslint';

  export default [...typescript, ...unicorn, ...vitest];
  ```
