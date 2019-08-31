// Helper functions that will be used in the webpack config
import path from 'path';
import escape from 'escape-string-regexp';

export const ignoredFiles = (appSrc) => {
  return new RegExp(
      `^(?!${escape(
      path.normalize(appSrc + '/').replace(/[\\]+/g, '/')
    )}).+/node_modules/`,
      'g'
  );
};

export class InterpolateHtmlPlugin {
  constructor(htmlWebpackPlugin, replacements) {
    this.htmlWebpackPlugin = htmlWebpackPlugin;
    this.replacements = replacements;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', compilation => {
      this.htmlWebpackPlugin
        .getHooks(compilation)
        .beforeEmit.tap('InterpolateHtmlPlugin', data => {
          // Run HTML through a series of user-specified string replacements.
          Object.keys(this.replacements).forEach(key => {
            const value = this.replacements[key];
            data.html = data.html.replace(
              new RegExp('%' + escapeStringRegexp(key) + '%', 'g'),
              value
            );
          });
        });
    });
  }
}