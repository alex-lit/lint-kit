import { createConfig } from '@alexlit/config-stylelint';

export default createConfig({
  a11y: true,
  gamut: true,
  'logical-css': true,
  'media-use-custom-media': true,
  'no-indistinguishable-colors': false,
  'no-unresolved-module': true,
  'no-unsupported-browser-features': true,
});
