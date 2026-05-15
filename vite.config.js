import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  envDir: '../',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,
    strictPort: true,
  },
  base: './',
});
