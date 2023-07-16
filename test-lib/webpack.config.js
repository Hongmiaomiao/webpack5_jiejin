const path = require('path');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname,"./dist"),
        library: {
            name: "myLibrary",
            type: "umd",
        }
    },
    externals: {
        lodash: {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtraPlugin.loader,"css-loader"],
            }
        ]
    },
    plugins: [new MiniCssExtraPlugin()],
    devtool: 'source-map'
};

