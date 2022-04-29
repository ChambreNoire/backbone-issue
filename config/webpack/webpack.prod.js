const { merge } = require('webpack-merge');
const {NoEmitOnErrorsPlugin} = require('webpack')

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new NoEmitOnErrorsPlugin()
    ],
})