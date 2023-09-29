#!/usr/bin/env node
import esbuild from 'esbuild';

const commonOptions = { entryPoints: ['./src/**/*.ts'], sourcemap: true, outdir: './dist' }

Promise.all([
    esbuild.build({ ...commonOptions, format: 'esm', outExtension: { '.js': '.mjs' } }),
    esbuild.build({ ...commonOptions, format: 'cjs', outExtension: { '.js': '.cjs' } })
]).catch(() => process.exit(1))
