# webpack-react-typescript 2021-04-06
使用 Webpack + React + Typescript 搭建项目

## 一些需要安装的包
### React相关
npm i react react-dom
### ts
npm i typescript --save-dev
### webpack
npm i webpack webpack-cli --save-dev

### 控制台输出美化，不影响项目运行
npm i progress-bar-webpack-plugin --save-dev 

### 移除之前打包生成的文件
npm i clean-webpack-plugin --save-dev

### 处理html
npm i html-webpack-plugin --save-dev

### tsconfig-path的webpack插件 主要是解决ts路径的问题
npm i tsconfig-paths-webpack-plugin --save-dev

### webpack配置合并，在这里主要是为了合并公共配置到不同环境中
npm i webpack-merge --save-dev

### gzip的webpack插件
npm i compression-webpack-plugin --save-dev

### bundle分析，可以看到打包后各个bundle的体积之类的信息，方便对打包进行优化
npm i webpack-bundle-analyzer --save-dev

### dev server
npm i webpack-dev-server --save-dev

### ts支持
npm i @types/react @types/react-dom  @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev

### babel核心、babel-react、babel-typescript
npm i @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript --save-dev
npm i @babel/plugin-transform-runtime --save-dev

### 模块处理插件
npm i babel-plugin-module-resolver babel-plugin-import --save-dev

### 支持装饰器，如果不需要就不用了
npm i @babel/plugin-proposal-decorators --save-dev

### loader
npm i babel-loader css-loader style-loader --save-dev

