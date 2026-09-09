import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(root, 'src')],
      },
    },
  },
  server: {
    host: true,
    proxy: {
      '/api/stats': {
        target: process.env.VITE_MICROSERVICE_URL || 'http://localhost:3002',
        changeOrigin: true,
      },
      '/api': {
        target: process.env.VITE_BACKEND_URL || 'http://localhost:3001',
        changeOrigin: true,
      },
    },
    allowedHosts: ['maxim-portfolio.ru', 'www.maxim-portfolio.ru', '148.135.209.114'],
  },
})
