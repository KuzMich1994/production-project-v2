import {BuildOptions} from './types/config';
import webpack from 'webpack';
import path from 'path';
import {buildWebpackPlugins} from './build-plugins';
import {buildWebpackLoaders} from './build-loaders';
import {buildWebpackResolvers} from './build-resolvers';
import {buildWebpackDevServer} from './build-dev-server';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },
        plugins: buildWebpackPlugins(options),
        module: {
            rules: buildWebpackLoaders(options),
        },
        resolve: buildWebpackResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildWebpackDevServer(options) : undefined,
    };
}