// eslint-disable-next-line no-undef
module.exports = {
  params: { name: ['[a-z0-9-]+'], type: ['bugfix', 'xxx-feature', 'hotfix'] },
  pattern: ':type/:name',
  prohibited: ['main', 'master', 'release'],
};
