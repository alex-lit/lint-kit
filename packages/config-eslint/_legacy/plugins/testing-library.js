module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/vue'],
      files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      plugins: ['testing-library'],
    },
  ],
};
