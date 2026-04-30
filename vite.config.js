import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      exclude: [
        "src/**/*.css",
        "src/assets/**",
        "dist/**",
        "coverage/**",
        "node_modules/**",
      ]
    }
  },
});
