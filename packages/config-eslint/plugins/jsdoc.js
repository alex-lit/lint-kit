import plugin from 'eslint-plugin-jsdoc';

import { FILES } from '../presets/base.js';

/** @see [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc) */
export const jsdoc = [
  { files: FILES, ...plugin.configs['flat/recommended'] },
  {
    files: FILES,
    rules: {
      'jsdoc/lines-before-block': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-jsdoc': [
        'warn',
        {
          enableFixer: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
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
  },
];
