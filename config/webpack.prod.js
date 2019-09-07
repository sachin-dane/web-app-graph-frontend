import CleanWebpackPlugin from 'clean-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import Visualizer from 'webpack-visualizer-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import paths from './paths';

module.exports = {
    mode: 'production',
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        // Enable this after solving the error of const keyword
        // minimizer: [new UglifyJsPlugin()],
    },
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.appBuild,
        chunkFilename: `${paths.jsFolder}/[name].[chunkhash].js`
    },
    plugins: [
        new CleanWebpackPlugin([paths.appBuild.split('/').pop()], {
            root: paths.root
        }),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({
            filename: './statistics.html'
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        }),
    ],
    devtool: 'source-map'
};