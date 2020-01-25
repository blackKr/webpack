

let config = require("./utils/config.js");
const webpack = require('webpack');

// __dirname 是 node.js 中的一个全局变量，它指向当前执行脚本所在的目录 ‘__’ 是两个下划线
let info = {
	entry: __dirname + "/app/main.js" // 已多次提及的唯一入口文件
	,output: {
		path: __dirname + "/public" // 打包后文件存放位置
		, filename: "bundle.js" // 打包后输出文件的文件名
	}
	,devtool:"eval-source-map"
	, devServer: {
		contentBase:"./public" // 本地服务器所加载的页面所在的目录
		,historyApiFallback:true //不跳转
		,inline:true //实时刷新
	}
	, module: {
		rules: [
			{
				test:/(\.jsx|\.js)$/
				,use:[
					{
						loader: "babel-loader"
						,options: {
							presets:[
								"es2015","react"
							]
						}
					}
				]
				,exclude:/node_modules/
			}
			,{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					}
					,{
						loader: "css-loader"
						, options: {
							modules:true
						}
					}
					,{
						loader: "postcss-loader"
					}
				]
			}
		]
	}
	, plugins: [
		new webpack.BannerPlugin("版权所有，翻版必究")
	]
};

module.exports = info;