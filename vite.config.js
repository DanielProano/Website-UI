import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

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
    cssCodeSplit: false,
  },
});
