const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    resolve: {
        fallback: {
            "path": require.resolve("path-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "stream": require.resolve("stream-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "buffer": require.resolve("buffer/"),
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/"),
            "os": require.resolve("os-browserify/browser"),
            "fs": false            
        } 
    },
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.min.js',
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new Dotenv(),
    ]
}
