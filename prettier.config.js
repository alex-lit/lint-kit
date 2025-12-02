import { createConfig } from '@alexlit/config-prettier';

export default createConfig({
  php: true,
  ruby: true,
  sql: true,
  tailwindcss: false, // сломан с 0.7.2
});
