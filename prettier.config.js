import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig([
  plugins.jsdoc(),
  plugins.mdc(),
  plugins.packageJson(),
  plugins.php(),
  plugins.pug(),
  plugins.ruby(),
  plugins.sh(),
  plugins.sortJson(),
  plugins.solidity(),
  plugins.sql(),
  plugins.tailwindcss(),
  plugins.xml(),
]);
