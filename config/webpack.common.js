import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import InterpolateHtmlPlugin from './utils/InterpolateHtmlPlugin';

import paths from './paths';
import getClientEnvironment from './env';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackIncludeAssetsPlugin from 'html-webpack-include-assets-plugin';
const isEnvDevelopment = process.env.NODE_ENV === 'development';
const isEnvProduction = process.env.NODE_ENV === 'production';

const env = getClientEnvironment('');

module.exports = {
 entry: paths.appIndexJs,
 stats: {
   // Config for minimal console.log mess.
   colors: true,
   version: false,
   hash: false,
   timings: false,
   chunks: false,
   chunkModules: false
 },
 module: {
   rules: [
     // "oneOf" will traverse all following loaders until one will
     // match the requirements. When no loader matches it will fall
     // back to the "file" loader at the end of the loader list.
     {
       oneOf: [
         // "url" loader works like "file" loader except that it embeds assets
         // smaller than specified limit in bytes as data URLs to avoid requests.
         // A missing `test` is equivalent to a match.
         {
           test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
           loader: 'url-loader',
           options: {
             limit: 10000,
             name: 'static/media/[name].[hash:8].[ext]',
           },
         },
         {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: ['babel-loader']
         },
         {
           test: /\.html$/,
           exclude: /node_modules/,
           use: [{
             loader: 'html-loader'
           }]
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader']
         },
         {
           test: /\.scss$/,
           use: [
             'style-loader',
             // Hack to conditionaly enable a loader based on the environment
             // isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
             'css-loader',
             'sass-loader'
           ]
         },
         {
           loader: 'file-loader',
           // Exclude `js` files to keep "css" loader working as it injects
           // its runtime that would otherwise be processed through "file" loader.
           // Also exclude `html` and `json` extensions so they get processed
           // by webpacks internal loaders.
           exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.es$/, /\.html$/, /\.json$/],
           options: {
             name: 'static/media/[name].[hash:8].[ext]',
           },
         },
       ]
     },

   ]
 },
 externals: {
   cesium: "Cesium"
 },
 resolve: {
   modules: ['src', 'node_modules'],
   extensions: ['*', '.js', '.jsx']
 },
 plugins: [
   new webpack.ProgressPlugin(),
   // Generates an `index.html` file with the <script> injected.
   new HtmlWebpackPlugin(
     Object.assign(
       {},
       {
         inject: true,
         template: paths.appHtml,
       },
       isEnvProduction
         ? {
           minify: {
             removeComments: true,
             collapseWhitespace: true,
             removeRedundantAttributes: true,
             useShortDoctype: true,
             removeEmptyAttributes: true,
             removeStyleLinkTypeAttributes: true,
             keepClosingSlash: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
           },
         }
         : undefined
     )
   ),
   // Makes some environment variables available in index.html.
   // The public URL is available as %PUBLIC_URL% in index.html, e.g.:
   // <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
   // In production, it will be an empty string unless you specify "homepage"
   // in `package.json`, in which case it will be the pathname of that URL.
   // In development, this will be an empty string.
   new InterpolateHtmlPlugin(env.raw),
   // Makes some environment variables available to the JS code, for example:
   // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
   // It is absolutely essential that NODE_ENV is set to production
   // during a production build.
   // Otherwise React will be compiled in the very slow development mode.
   new webpack.DefinePlugin(env.stringified),
 ]
};

