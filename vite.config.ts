import { defineConfig } from "vite";
import { copyFileSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "user-ambassador": resolve(__dirname, "user-ambassador-index.html"),
        brand: resolve(__dirname, "brand-index.html"),
        admin: resolve(__dirname, "admin-index.html"),
      },
    },
    assetsDir: "assets",
    copyPublicDir: true,
  },
  publicDir: "public",
  plugins: [
    {
      name: "copy-styles",
      writeBundle() {
        try {
          copyFileSync(resolve("styles.css"), resolve("dist", "styles.css"));
        } catch (error) {
          console.warn("Failed to copy styles.css:", error);
        }
      },
    },
  ],
});
