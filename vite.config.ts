import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Portifolio_react_vite_deploy",
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "CSS_SYNTAX_ERROR" || // Ignora erros de CSS
          warning.code === "JS_COMMENT_IN_CSS"  // Ignora "//" no CSS
        ) {
          return;
        }
        warn(warning);
      },
    },
  },
});
