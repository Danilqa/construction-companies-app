const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: [
        path.join(__dirname, '../../src/index.tsx')
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../docs')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../../docs'),
        historyApiFallback: true,
        port: 3500,
        host: '0.0.0.0'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' }
        ])
    ]
};
