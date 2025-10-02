import { defineConfig } from "vite";
import { copyFileSync } from "fs";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "index.html",
        app: "app.js",
        "page-01": "pages/page-01-welcome.js",
        "page-02": "pages/page-02-brand-select.js",
        "page-03": "pages/page-03-interests.js",
        "page-04": "pages/page-04-feed-cards.js",
        "page-05": "pages/page-05-feed-fullscreen.js",
        "page-06": "pages/page-06-explore.js",
        "page-07": "pages/page-07-create.js",
        "page-08": "pages/page-08-wallet.js",
        "page-09": "pages/page-09-profile.js",
        "page-10": "pages/page-10-ambassador.js",
        "page-11": "pages/page-11-analytics.js",
        "page-12": "pages/page-12-shopping.js",
        "page-13": "pages/page-13-invite.js",
        "page-14": "pages/page-14-brand-admin.js",
        "page-15": "pages/page-15-leaderboard.js",
        "page-16": "pages/page-16-brand-hub.js",
        "page-17": "pages/page-17-brand-pages.js",
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
