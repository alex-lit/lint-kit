import { createConfig } from '@alexlit/config-stylelint';

export default createConfig({
  a11y: true,
  gamut: true,
  'logical-css': true,
  'media-use-custom-media': true,
  'no-indistinguishable-colors': false,
  'no-unsupported-browser-features': true,
});
