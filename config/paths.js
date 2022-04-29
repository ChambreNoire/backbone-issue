'use strict';

const path = require('path');
const { realpathSync } = require('fs');

const appDirectory = realpathSync(process.cwd());
const resolveAppPath = (relativePath) =>
  path.resolve(appDirectory, relativePath);

module.exports = {
  appPath: resolveAppPath('.'),
  appOutput: resolveAppPath('dist/app'),
  appSrc: resolveAppPath('src'),
  appHtml: resolveAppPath('src/index.html'),
  appIndex: resolveAppPath('src/index.tsx'),
};
