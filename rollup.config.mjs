import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import { babel } from '@rollup/plugin-babel';
import svgrPlugin from 'vite-plugin-svgr';
import url from '@rollup/plugin-url';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from 'url';
import path from 'path';
import terser from '@rollup/plugin-terser';
import brotli from 'rollup-plugin-brotli';
import fs from "fs/promises"

// Resolve __dirname using import.meta.url
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const loadPackageJson = async () => {
  const data = await fs.readFile('./package.json', 'utf-8');
  return JSON.parse(data);
};

const packageJson = await loadPackageJson();

export default [
  {
    input: 'src/index.ts',
    context: 'window',
    output: [
      {
        file: 'lib/index.cjs', // CJS output to lib
        format: 'cjs',
        sourcemap: true,
        inlineDynamicImports: true,
        chunkFileNames: '[name]-[hash].js',
      },
      {
        file: 'lib/index.esm.js', // ESM output to lib
        format: 'esm',
        sourcemap: true,
        inlineDynamicImports: true,
        chunkFileNames: '[name]-[hash].js',
      },
    ],
    plugins: [
      peerDepsExternal(), // Exclude peer dependencies
      resolve(), // Resolve node_modules
      commonjs(), // Convert CommonJS modules to ESM
      typescript({
        exclude: ['**/*.stories.tsx', '**/*.test.tsx'], // Exclude Storybook & test files
      }),
      url({
        include: ['**/*.svg', '**/*.png', '**/*.jpg'],
        limit: 10000, // Inline assets smaller than 10KB
      }),
      postcss({
        extensions: ['.scss'],
      }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'bundled',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
      terser(), // Minify JavaScript using Terser
      brotli(), // Brotli compression for size reduction
      copy({
        targets: [
          {
            src: 'src/**/*.scss', // Copy styles to build folder if needed
            dest: path.join(__dirname, 'lib/styles'),
          },
        ],
      }),
    ],
    external: ['react', 'react-dom'], // Externalize React and ReactDOM
  },
  {
    context: 'window',
    input: 'lib/index.d.ts',
    output: [
      { file: 'lib/index.d.ts', format: 'es', inlineDynamicImports: true },
    ],
    plugins: [dts()],
    external: [/\.scss$/, /\.stories\.tsx$/], // Exclude styles and stories from type declarations
  },
];
