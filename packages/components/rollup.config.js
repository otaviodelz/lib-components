import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    postcss({
      extensions: ['css'],
      modules: {
        scopeBehaviour: 'global',
      },
      sourceMap: true,
    }),
  ],
};
