const path = require("path");

const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackConfig = {
    target: "node", // koa项目仅在node环境下运行，因此设置称'node'
    entry: {
        // 设置入口文件
        server: path.join(__dirname, "../src/index.js"),
    },
    output: {
        // 设置打包后的文件和位置
        filename: "[name].bundle.js",
        path: path.join(__dirname, "../dist"),
    },
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: {
                    loader: "babel-loader",
                },
                // 尽量将 loader 应用于最少数量的必要模块，因此设置include
                // 只针对该目录下的js文件进行babel处理
                include: path.join(__dirname, "../src"),
            },
        ],
    },
    resolve: {
        // modules: 告诉webpack哪些目录需要搜索去匹配解析
        modules: [path.join(__dirname, "../src/index.js"), "node_modules"],
        // extensions: 告诉webpack这些后缀文件需要去搜索匹配
        extensions: [".js", ".json"],
        alias: {
            // 设置别名指向对应目录
            "@": path.join(__dirname, "../src"),
        },
        fallback: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false,
            setImmediate: false,
            path: false,
        }
    },
    externals: [nodeExternals()], // 排除对node_modules里的依赖进行打包
    plugins: [
        new CleanWebpackPlugin(), // 打包前清除输出目录
        new webpack.DefinePlugin({
            // 定义环境变量，区分开发和生产环境
            // 具体详情可查看DefinePlugin文档
            "process.env.NODE_ENV":
                process.env.NODE_ENV === "production"
                    ? JSON.stringify("production")
                    : JSON.stringify("development"),
        }),
    ],
};

module.exports = webpackConfig;
