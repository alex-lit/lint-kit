# StyleLint Configuration

## Installation

```sh
npm i @alexlit/config-stylelint -D
```

## Connection

- Default
  ([see plugins enabled by default](https://github.com/alex-lit/lint-kit/blob/master/packages/config-stylelint/index.js))

  ```js
  // stylelint.config.js
  import { createConfig } from '@alexlit/config-stylelint';

  export default createConfig();
  ```

- Custom

  ```js
  // stylelint.config.js
  import { createConfig } from '@alexlit/config-stylelint';

  export default createConfig(
    {
      // disable some default plugins
      'no-nested-media': false,

      // enable some optional plugins
      gamut: true,
      'logical-css': true,
    },
    {
      // add custom rules
      rules: {
        'custom-property-empty-line-before': [
          'always',
          {
            except: ['after-comment', 'after-custom-property', 'first-nested'],
          },
        ],
      },
    },
  );
  ```

## Development

- Check rules

  ```sh
  npx stylelint-find-new-rules
  ```

## Usefull links

- [Awesome StyleLint](https://github.com/stylelint/awesome-stylelint)
- [stylelint-scales](https://github.com/jeddy3/stylelint-scales)
- [stylelint-value-no-unknown-custom-properties](https://github.com/csstools/stylelint-value-no-unknown-custom-properties)
