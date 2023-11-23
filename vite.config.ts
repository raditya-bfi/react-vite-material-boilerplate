import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }: any) => {
  console.log('mode', mode)
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const serverPort: number = parseInt(`${process.env.VITE_PORT}`, 10) || 3000

  return defineConfig({
    build: {
      outDir: './build',
      sourcemap: false,
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
      preserveSymlinks: true,
    },
    server: {
      port: serverPort,
    },
  })
}
