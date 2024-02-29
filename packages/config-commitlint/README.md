# CommitLint Configuration

Lines the commit message and also runs the code through the linters and does not
pass commit if errors are found

## Installation

```sh
npm i @alexlit/config-commitlint -D
```

## Connection

```js
// commitlint.config.js
export default {
  extends: ['@alexlit/config-commitlint'],
};
```

```bash
# .husky/commit-msg
npx --no -- commitlint --edit "$1"
```
