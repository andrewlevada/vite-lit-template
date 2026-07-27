import { resolve } from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // Path aliases (must match tsconfig.json paths)
    alias: {
      "~src": resolve(__dirname, "src"),
      "~services": resolve(__dirname, "src/services"),
      "~components": resolve(__dirname, "src/components"),
      "~utils": resolve(__dirname, "src/utils"),
      "~assets": resolve(__dirname, "src/assets"),
      "~graphics": resolve(__dirname, "src/assets/graphics"),
      "~styles": resolve(__dirname, "src/assets/styles"),
    },
  },

  build: {
    outDir: "build",
  },
})
