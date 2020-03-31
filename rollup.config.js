import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/ScrollMemory.js',
  output: {
    format: 'cjs',
    file: 'dist/ScrollMemory.js'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  external: ['react', 'react-router-dom']
};
