const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development", // 开发模式
    // JavaScript 执行入口文件
    entry: {
        index: "./src/index.js",
    },
    devtool: "inline-source-map", // 支持 Source Map，以方便调试，此配置仅用于示例，不要用于生产环境
    plugins: [
        new HtmlWebpackPlugin({
            title: "首页",
        }),
    ],
    module: {
        rules: [
            {
                // 用正则去匹配要用该 loader 转换的 CSS 文件
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            // {
            //     test: /\.png|svg|jpg|jpeg|gif$/, // 支持使用图片
            //     type: "asset/resource",
            // },
        ],
    },
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: "bundle.js",
        // 把输出文件都放到 dist 目录下
        path: path.resolve(__dirname, "./dist"),
        clean: true, // 每次更新前自动删除dist文件下内容
    },
};
