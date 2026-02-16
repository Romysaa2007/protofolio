import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This is necessary because the existing code uses process.env.API_KEY
      // In a strict Vite app, we usually use import.meta.env, but this polyfills it
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  }
})