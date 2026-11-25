import { defineConfig, plugins } from '@alexlit/config-prettier';

export default defineConfig({
  plugins: [
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
    // plugins.yuku(), // экспериментальный парсер JS/TS, см. раздел Yuku
  ],
});
