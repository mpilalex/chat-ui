const webpack = require("webpack");
const Merge = require("webpack-merge");
const CommonConfig = require("./webpack.common");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env){
    let plugins = [];
    if(env && env.analyse){
        plugins.push(new BundleAnalyzerPlugin());
    }
    return Merge(CommonConfig, {
        plugins:plugins

    })
};
