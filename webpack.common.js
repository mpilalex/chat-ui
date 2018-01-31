const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");

const plugins = [];


plugins.push(
    new CleanWebpackPlugin(["/public"]),
    new ExtractTextPlugin({filename: "app.bundle.css"})
);

plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            // this assumes your vendor imports exist in the node_modules directory
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    new HtmlWebpackPlugin(
        {
            template: path.join(__dirname, './index.html'),
            filename: 'index.html',
            inject: 'body'
        }
    )
);


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/dist/",
        filename: 'app.[name].js'
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-1', 'react']
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', "postcss-loader"],
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', "postcss-loader","sass-loader"],
                })
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    }
};