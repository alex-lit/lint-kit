import { createConfig } from '@alexlit/config-stylelint';

export default createConfig({
  a11y: true,
  gamut: true,
  'logical-css': true,
  'no-indistinguishable-colors': false,
  'no-unsupported-browser-features': false,
});
