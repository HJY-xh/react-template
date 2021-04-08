const devConfig = required("./webpack/webpack.dev.js");
const prodConfig = required("./webpack/webpack.prod.js");

// 根据环境加载不同配置
module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;