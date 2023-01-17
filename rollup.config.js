import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import sucrase from '@rollup/plugin-sucrase';
import dts from 'rollup-plugin-dts';

import pkg from './package.json' assert { type: "json" };

export default [
    {
        plugins: [
            resolve(),
            commonjs(),
            json(),
            sucrase({ transforms: ['typescript'] }),
        ],
        input: 'src/main.ts',
        output: {
            file: pkg.main,
            format: 'cjs',
            name: 'svaml',
            sourcemap: true,
        },
    },
    {
        plugins: [dts()],
        input: 'src/main.ts',
        output: {
            file: 'dist/main.d.ts',
            format: 'es'
        },
    }
];