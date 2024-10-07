import webpack from 'webpack';

export function buildWebpackResolvers(): webpack.ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}