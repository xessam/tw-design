import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
// import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  resolve:{
    alias:{
      '@' : resolve(__dirname, './src'),
      '@components' : resolve(__dirname, './src/components'),
      '@theme' : resolve(__dirname, './src/theme'),
      '@tools' : resolve(__dirname, './src/tools'),
      '@utils' : resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "TwUiComponent",
      fileName: (format) => `tw-ui-component.${format}.js`,
    },
    // cssCodeSplit: true,
    cssTarget: 'chrome61',
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ["react"],
      // plugins: [babel({ babelHelpers: "bundled" })],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "react",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'tw-ui-fonticon.css';
          return assetInfo.name;
        },
      },
    },
  },
});
