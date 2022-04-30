const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
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
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new Dotenv(),
        new MiniCssExtractPlugin({filename: '[name].css'}),
        new WorkboxPlugin.GenerateSW()
    ]
}
