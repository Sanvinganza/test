import { defineConfig } from "vitest/config";

export default defineConfig({
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    globals: true,
    includeSource: ["src/**/*.{ts,tsx}"],
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },
});
