import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, 'src/index2.html'),
        nested: resolve(__dirname, 'src/index3.html'),
        nested: resolve(__dirname, 'src/recommend-black.html'),
        nested: resolve(__dirname, 'src/recommend.html'),
        nested: resolve(__dirname, 'src/recommend2.html'),
        nested: resolve(__dirname, 'src/whisky-black.html')
      },
    },
  },
});
