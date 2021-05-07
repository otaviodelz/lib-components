import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  external: ['react'],
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs(),
    postcss({
      extensions: ['.css'],
      modules: true,
      sourceMap: true,
    }),
    peerDepsExternal(),
  ],
};
