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

  // resolve: {
  //   alias: {
  //     '@components': path.resolve(__dirname, './src/components'),
  //     '@styles': path.resolve(__dirname, './src/assets/styles'),
  //     '@icons': path.resolve(__dirname, './src/assets/icons'),
  //   },
  // },

  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/assets/styles/_colors.scss";`,
  //     },
  //   },
  // },
};
