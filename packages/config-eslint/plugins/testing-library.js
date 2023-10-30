/** @see [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) */
module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/vue'],
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      plugins: ['testing-library'],
    },
  ],
};
