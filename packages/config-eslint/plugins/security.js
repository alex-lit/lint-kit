module.exports = {
  extends: ['plugin:security/recommended'],

  plugins: ['security'],

  rules: {
    'security/detect-object-injection': 'off',
    'security/detect-unsafe-regex': 'off',
  },
};
