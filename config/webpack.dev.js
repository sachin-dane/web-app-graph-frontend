import path from 'path';
import webpack from 'webpack';
// import Jarvis from 'webpack-jarvis';

import paths from './paths';
import devServer from './webpack.devServer';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: undefined,
    chunkFilename: '[name].js',
    devtoolModuleFilenameTemplate: (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    // This is the URL that app is served from. We use "/" in development.
    publicPath: '/',
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => {
      return (
        assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
      );
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new Jarvis({
    //   port: 1337
    // })
  ]
};