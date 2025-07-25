import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        index2: resolve(__dirname, "src/index2.html"),
        index3: resolve(__dirname, "src/index3.html"),
      },
    },
  },
});
