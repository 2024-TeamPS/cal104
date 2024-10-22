import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import fetchData from './src/api/holidayApi'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'build-start-plugin',
        buildStart: async () => {
          const URL = env.VITE_DATE_API_URL
          const serviceKey = env.VITE_DATE_API_DECODING_KEY
          const currentYear = new Date().getFullYear()
          const years = Array.from(
            { length: currentYear-2019+3 },
            (_, i) => 2019 + i
          )
          await Promise.all(
            years.map((year) => fetchData(year.toString(), URL, serviceKey))
          )
        },
      },
    ],
    server: { port: 3000 },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@assets': path.resolve(__dirname, './src/assets'), // 추가
      },
    },
  }
})
