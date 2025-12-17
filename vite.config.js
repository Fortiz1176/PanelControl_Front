import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@utils": path.resolve(__dirname, "./src/utils/index.js"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
