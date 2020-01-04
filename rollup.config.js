import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/o.js',
    format: 'cjs'
  },
  plugins: [
    json(),
    resolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ]
};