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
  // Yuku пока не включаем: парсеры `yuku`/`yuku-ts` экспериментальные.
  // Костыли с overrides и plugins внутри них описаны в plugins/yuku.js.
  // Когда плагин станет стабильным и подружатся jsdoc/tailwind, включить:
  // plugins.yuku(),
]);
