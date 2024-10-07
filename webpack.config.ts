import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {buildWebpackPlugins} from './config/build/build-plugins';
import {buildWebpackLoaders} from './config/build/build-loaders';
import {buildWebpackResolvers} from './config/build/build-resolvers';
import {buildWebpackConfig} from './config/build/build-webpack-config';
import {BuildEnv, BuildPaths} from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};
