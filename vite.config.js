import react from '@vitejs/plugin-react';
import path from 'path';
import svgrPlugin from 'vite-plugin-svgr';

export default {
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  build: {
    // Minify code using Terser for production builds
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        pure_funcs: ['console.info', 'console.debug'], // More aggressive removal of console functions
      },
      mangle: true, // Mangle variable names to reduce size
    },
    // Chunk size warning limit (in KB)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Code Splitting: Split vendor libraries into their own chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Add content hash for better caching
        chunkFileNames: '[name]-[hash].js',
      },
    },
  },
};
