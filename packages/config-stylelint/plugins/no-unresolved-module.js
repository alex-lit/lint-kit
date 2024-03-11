export default {
  plugins: ['stylelint-no-unresolved-module'],

  rules: {
    'plugin/no-unresolved-module': {
      alias: {
        '~assets': 'assets',
        '~public': 'public',
        '~static': 'static',
      },

      modules: [
        'assets',
        'node_modules',
        'public',
        'src',
        'src/assets',
        'src/public',
        'src/static',
        'static',
      ],
    },
  },
};
