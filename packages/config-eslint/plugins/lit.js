/** @see [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) */
module.exports = {
  extends: ['plugin:lit/recommended'],

  plugins: ['lit'],

  rules: {
    'lit/attribute-value-entities': 'off',
  },
};
