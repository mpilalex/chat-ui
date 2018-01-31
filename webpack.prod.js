const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");

module.exports = function (env) {
    let plugins = [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            compress: {
                warnings: false,
                keep_fnames: true
            },
            mangle: {
                keep_fnames: true
            },
            comments: false
        })
    ];
    if(env && env.analyse){
        plugins.push(new BundleAnalyzerPlugin());
    }
    return Merge(CommonConfig, {
        plugins: plugins
    });
};