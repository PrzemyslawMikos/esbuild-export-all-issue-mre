const { join } = require('path');
const { build } = require('esbuild');

const alias = {
    p1: join(__dirname, './p1/index.ts'),
    p2: join(__dirname, './p2/index.ts'),
    p3: join(__dirname, './p3/index.ts'),
};

const startBuild = async () => {
    console.log('Build started', __dirname);
    await build({
        bundle: true,
        alias,
        platform: 'node',
        target: 'node12',
        format: 'cjs',
        entryPoints: ['./p3/index.ts'],
        outfile: './dist/index.cjs',
        sourcemap: true,
    });
    console.log('Build done');
}

startBuild();
