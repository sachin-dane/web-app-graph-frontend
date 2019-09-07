import path from 'path';
import escape from 'escape-string-regexp';

// eslint-disable-next-line import/prefer-default-export
const ignoredFiles = appSrc => {
    return new RegExp(
        `^(?!${escape(
            path.normalize(`${appSrc}/`).replace(/[\\]+/g, '/')
        )}).+/node_modules/`,
        'g'
    );
};

export default ignoredFiles;
