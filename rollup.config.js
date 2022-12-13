import dts from 'rollup-plugin-dts'


export default [
  {
    input: 'build/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true
    },
  },
  {
    input: `build/index.d.ts`,
    plugins: [dts()],
    output: {
      file: `dist/bundle.d.ts`,
      format: 'es',
    },
  }
]