/**
 * Create lint-staged config
 *
 * @param {Record<string, boolean>} plugins Enabled plugins
 * @param {Record<string, unknown>} config Users config
 *
 * @returns {Record<string, unknown>} Lint-staged configuration
 */
const createLintStagedConfig = (plugins = {}, config = {}) => {
  const pluginsList = {
    eslint: true,
    htmllint: true,
    lockfilelint: true,
    markdownlint: true,
    npmlint: true,
    prettier: true,
    stylelint: true,

    ...plugins,
  };

  const eslint = pluginsList.eslint ? 'eslint --fix' : 'echo "eslint disabled"';

  const htmllint = pluginsList.htmllint
    ? 'linthtml'
    : 'echo "htmllint disabled"';

  const lockfilelint = pluginsList.lockfilelint
    ? 'lockfile-lint --type npm --path package-lock.json'
    : 'echo "lockfilelint disabled"';

  const markdownlint = pluginsList.markdownlint
    ? 'markdownlint --fix'
    : 'echo "markdownlint disabled"';

  const npmlint = pluginsList.npmlint
    ? 'npmPkgJsonLint'
    : 'echo "npmlint disabled"';

  const prettier = pluginsList.prettier
    ? 'prettier --write'
    : 'echo "prettier disabled"';

  const stylelint = pluginsList.stylelint
    ? 'stylelint --fix'
    : 'echo "stylelint disabled"';

  return {
    '*.cjs': [eslint, prettier],
    '*.css': [stylelint, prettier],
    '*.erb': [prettier],
    '*.html': [htmllint, prettier],
    '*.jade': [prettier],
    '*.js': [eslint, prettier],
    '*.json5': [prettier, eslint],
    '*.json,!package-lock.json': [eslint, prettier],
    '*.jsonc': [prettier, eslint],
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
    '*.yaml,!pnpm-lock.yaml,!yarn-lock.yaml': [prettier],
    '*.yml': [prettier],
    'package-lock.json': [lockfilelint],
    'package.json': [npmlint],

    ...config,
  };
};

export { createLintStagedConfig };
