import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildWebpackLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                          ? '[path][name]__[local]'
                          : '[hash:base64:8]',
                        exportLocalsConvention: 'camel-case',
                    },
                }
            },
            "sass-loader",
        ],
      };

    return [
      tsLoader,
      sassLoader,
    ]
}