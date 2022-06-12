import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync } from 'fs'
import { join } from 'path'

// https://github.com/johanndev/asp_vite
const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`

const certificateName = process.env.npm_package_name

const keyFilePath = join(baseFolder, `${certificateName}.key`)
const certFilePath = join(baseFolder, `${certificateName}.pem`)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    https: {
      key: readFileSync(keyFilePath),
      cert: readFileSync(certFilePath),
    },
    proxy: {
      '^/api/.*': {
        target: 'https://localhost:7053',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '/'),
      },
    },
  },
})
