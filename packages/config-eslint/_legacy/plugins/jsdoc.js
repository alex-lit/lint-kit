module.exports = {
  extends: ['plugin:jsdoc/recommended'],

  plugins: ['jsdoc'],

  rules: {
    'jsdoc/no-undefined-types': 'off',

    'jsdoc/require-jsdoc': [
      'warn',
      {
        enableFixer: false,

        require: {
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          ClassExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          MethodDefinition: false,
        },
      },
    ],

    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off',
    'jsdoc/tag-lines': 'off',
  },
};
