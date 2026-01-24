import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "WebsiteTopbar",
      fileName: "website-topbar",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    cssCodeSplit: true,
  },
});
