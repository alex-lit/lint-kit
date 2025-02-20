import plugin from '@intlify/eslint-plugin-vue-i18n';

/** @see [eslint-plugin-vue-i18n](https://eslint-plugin-vue-i18n.intlify.dev/) */
export const vueI18n = [
  ...plugin.configs['flat/recommended'].map((config) => ({
    ...config,
    ignores: ['**/*.json', '**/*.jsonc', '**/*.json5'],
  })),

  {
    files: ['**/*.vue'],
    rules: {
      '@intlify/vue-i18n/key-format-style': [
        'error',
        'snake_case',
        {
          allowArray: false,
        },
      ],
      '@intlify/vue-i18n/no-duplicate-keys-in-locale': [
        'error',
        {
          ignoreI18nBlock: false,
        },
      ],
      '@intlify/vue-i18n/no-dynamic-keys': 'warn',
      '@intlify/vue-i18n/no-raw-text': 'off',
      '@intlify/vue-i18n/no-unused-keys': 'warn',
      '@intlify/vue-i18n/prefer-sfc-lang-attr': 'error',
    },
  },
  {
    settings: {
      'vue-i18n': {
        localeDir: './**/locales/*.{json,json5,yaml,yml}',
        messageSyntaxVersion: '^9.0.0',
      },
    },
  },
];
