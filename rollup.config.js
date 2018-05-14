// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/packs/module/index.js',
  output: {
    name: 'scrollNav',
    sourcemap: true,
    format: 'umd',
    file: 'index.js',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    uglify(),
  ],
  external: ['dragscroll'],
};
