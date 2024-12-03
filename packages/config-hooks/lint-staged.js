/**
 * Create lint-staged config
 *
 * @param {Record<string, boolean>} plugins Enabled plugins
 * @param {Record<string, any>} config Users config
 *
 * @returns {Record<string, any>} Lint-staged configuration
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

  const eslint = pluginsList.eslint ? 'eslint --fix' : 'true';

  const htmllint = pluginsList.htmllint ? 'linthtml' : 'true';

  const lockfilelint = pluginsList.lockfilelint
    ? 'lockfile-lint --type npm --path package-lock.json'
    : 'true';

  const markdownlint = pluginsList.markdownlint ? 'markdownlint --fix' : 'true';

  const npmlint = pluginsList.npmlint ? 'npmPkgJsonLint' : 'true';

  const prettier = pluginsList.prettier ? 'prettier --write' : 'true';

  const stylelint = pluginsList.stylelint ? 'stylelint --fix' : 'true';

  return {
    '*.cjs': [eslint, prettier],
    '*.css': [stylelint, prettier],
    '*.erb': [prettier],
    '*.html': [htmllint, prettier],
    '*.jade': [prettier],
    '*.js': [eslint, prettier],
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
    'package.json': [npmlint],

    ...config,
  };
};

export { createLintStagedConfig };
