const eslint = 'eslint --fix';
const htmllint = 'linthtml';
const lockfilelint = 'lockfile-lint --type npm --path package-lock.json';
const markdownlint = 'markdownlint --fix';
const npmlint = 'npmPkgJsonLint';
const prettier = 'prettier --write';
const stylelint = 'stylelint --fix"';

const LINT_STAGED_CONFIG = {
  '*.cjs': [eslint, prettier],
  '*.css': [stylelint, prettier],
  '*.erb': [prettier],
  '*.html': [htmllint, prettier],
  '*.jade': [prettier],
  '*.js': [eslint, prettier, ''],
  '*.json,!package-lock.json': [prettier],
  '*.jsonc': [prettier],
  '*.jsonp': [prettier],
  '*.jsx': [eslint, prettier],
  '*.md': [prettier, markdownlint],
  '*.mjs': [eslint, prettier],
  '*.pcss': [stylelint, prettier],
  '*.php': [prettier],
  '*.postcss': [stylelint, prettier],
  '*.pug': [prettier],
  '*.rb': [prettier],
  '*.sass': [stylelint, prettier],
  '*.scss': [stylelint, prettier],
  '*.sh': [prettier],
  '*.sol': [prettier],
  '*.sql': [prettier],
  '*.svg': [prettier],
  '*.ts': [eslint, prettier],
  '*.tsx': [eslint, prettier],
  '*.vue': [eslint, stylelint, prettier],
  '*.xml': [prettier],
  '*.yaml': [prettier],
  '*.yml': [prettier],
  'package-lock.json': [lockfilelint],
  // eslint-disable-next-line sort-keys
  'package.json': [npmlint],
};

/**
 * Create lint-staged config
 *
 * @param {Record<string, any>} config Users config
 *
 * @returns {Record<string, any>} Lint-staged configuration
 */
const createLintStagedConfig = (config = {}) => ({
  ...LINT_STAGED_CONFIG,
  ...config,
});

export { createLintStagedConfig, LINT_STAGED_CONFIG };
