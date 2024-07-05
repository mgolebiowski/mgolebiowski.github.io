import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import ViteWebp from 'vite-plugin-webp-generator'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact({
    prerender: {
      enabled: true,
      renderTarget: "#app",
      prerenderScript: "src/app.jsx"
    },
  }),
  ViteWebp.default({
    extensions: ["png", "jpg"],
  }),
  ],
})
