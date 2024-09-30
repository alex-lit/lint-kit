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

- With preset

  ```js
  // eslint.config.js
  import { defaultPreset } from '@alexlit/config-eslint';

  export default [...defaultPreset];
  ```

- Custom rules
  ([available plugins](https://github.com/alex-lit/lint-kit/blob/master/packages/config-eslint/index.js))

  ```js
  // eslint.config.js
  import { typescript, unicorn, vitest } from '@alexlit/config-eslint';

  // config example:
  export default [
    ...typescript,
    ...unicorn,
    ...vitest,

    ...[
      // <custom rules>
    ],
  ];
  ```

## Usefull links

- [Awesome ESLint](https://github.com/dustinspecker/awesome-eslint)
