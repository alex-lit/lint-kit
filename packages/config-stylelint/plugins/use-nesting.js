export default {
  plugins: ['stylelint-use-nesting'],

  rules: {
    'csstools/use-nesting': ['always', { except: [], syntax: 'scss' }],
  },
};
