const { merge } = require('webpack-merge');
const {SourceMapDevToolPlugin} = require('webpack')

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: false,
    plugins: [
        new SourceMapDevToolPlugin({
            append: '\n//# sourceMappingURL=[url]',
            filename: '[name].js.map'
        })
    ]
})