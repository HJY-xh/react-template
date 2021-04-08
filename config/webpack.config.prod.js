const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

// 通过webpack-merge合并基础配置，添加生产时配置
const webpackConfig = merge(baseConfig, {
	mode: "production", // 生产模式
	stats: {
		children: false, // webpack打包时子模块信息设置不显示
		warnings: false // 警告不显示
	},
	optimization: {
		// splitChunks 用来避免模块之间重复的依赖关系
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 3,
					enforce: true
				}
			}
		}
	}
});

module.exports = webpackConfig;
