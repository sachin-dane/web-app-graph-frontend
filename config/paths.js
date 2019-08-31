import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


const moduleFileExtensions = [
    'web.js',
    'js',
    'json'
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
        fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );

    if (extension) {
        return resolveFn(`${filePath}.${extension}`);
    }

    return resolveFn(`${filePath}.js`);
};

module.exports = {
    dotenv: resolveApp('.env'),
    root: path.resolve(fs.realpathSync(process.cwd())),
    appBuild: resolveApp('build'),
    appPublic: resolveApp('public'),
    appSrc: resolveApp('src'),
    appIndexJs: resolveModule(resolveApp, 'src/index'),
    appHtml: resolveApp('public/index.html'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js'
};