const path = require("path");

const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common");
// 根据环境做一些不同的配置
// const env = process.env.NODE_ENV;
// const config = require(`../config/${env}.config.json`);

module.exports = merge(common, {
    mode: "development",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "../dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        host: "0.0.0.0",
        port: 3000,
        hot: true,
        proxy: {
            // 代理
            // '/': {
            //   target: config.backend,
            // },
        },
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new HTMLWebpackPlugin({
            cache: false,
            filename: "index.html",
              template: path.resolve(__dirname, '../src/index.html'),
            //   favicon: path.resolve(__dirname, '../src/common/assets/favicon.ico'),
        }),
    ],
});
