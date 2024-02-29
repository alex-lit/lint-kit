# Prettier Configuration

## Installation

```sh
npm i @alexlit/config-prettier -D
```

## Connection

```js
// prettier.config.js
import config from '@alexlit/config-prettier';

export default {
  ...config,

  // if additional plugins needed
  plugins: [...config.plugins, 'your-favorite-plugin'],
};
```
