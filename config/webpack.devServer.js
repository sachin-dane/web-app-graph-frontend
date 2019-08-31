import ignoredFiles from './utils/ignoredFiles';

import paths from './paths';

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';

const devServer = {
    contentBase: paths.appPublic,
    // Enable gzip compression of generated files.
    compress: true,
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    // By default files from `contentBase` will not trigger a page reload.
    watchContentBase: true,
    publicPath: '/',
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.hooks[...].tap` calls above.
    quiet: true,
    watchOptions: {
        ignored: ignoredFiles(paths.appSrc)
    },
    // Enable HTTPS if the HTTPS environment variable is set to 'true'
    https: protocol === 'https',
    host,
    overlay: false,
    // historyApiFallback: {
    //   // Paths with dots should still use the history fallback.
    //   // See https://github.com/facebook/create-react-app/issues/387.
    //   disableDotRule: true,
    // },
    clientLogLevel: 'none',
    hot: true,
    historyApiFallback: true
};

export default devServer;
