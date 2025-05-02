import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://yourwebsite.com",
      exclude: ["/admin", "/dashboard"], // Pages to exclude
    }),
  ],
  build: {
    outDir: "dist",
  },
  base: "/",
});
