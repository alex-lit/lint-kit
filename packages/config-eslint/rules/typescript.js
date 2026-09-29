/* eslint-disable unicorn/no-null */

/**
 * Shared TypeScript rules.
 *
 * `format: null` disables the format check for destructured variables — their
 * names may be arbitrary.
 */
export const TS_RULES = {
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'separate-type-imports', prefer: 'type-imports' },
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
      selector: 'function',
    },
    {
      format: ['strictCamelCase'],
      leadingUnderscore: 'require',
      modifiers: ['private'],
      selector: 'memberLike',
    },
    {
      format: ['strictCamelCase'],
      leadingUnderscore: 'allow',
      selector: 'parameter',
    },
    { format: ['StrictPascalCase'], selector: 'typeLike' },
    {
      format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'variable',
    },
    { format: null, modifiers: ['destructured'], selector: 'variable' },
    {
      format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      selector: 'enumMember',
    },
    {
      format: ['strictCamelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'classProperty',
    },
    {
      format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE', 'snake_case'],
      leadingUnderscore: 'allow',
      selector: 'typeProperty',
    },
    {
      format: ['strictCamelCase', 'PascalCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      selector: 'import',
    },
  ],
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-import-type-side-effects': 'error',
};
/* eslint-enable unicorn/no-null */
