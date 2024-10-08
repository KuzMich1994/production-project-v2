import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config';

export function buildWebpackLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
    };

    const fileLoader = {
          test: /\.(png|jpe?g|gif|woff2|woff)$/i,
          use: [
              {
                  loader: 'file-loader',
              },
          ],
      };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

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
      fileLoader,
      svgLoader,
      tsLoader,
      sassLoader,
    ]
}