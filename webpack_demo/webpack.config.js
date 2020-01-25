module.exports = {
	entry: __dirname + "/src/pages/index/index.js",//已多次提及的唯一入口文件
	output: {
		path: __dirname + "/asset/dev/",//打包后的文件存放的地方
		filename: "main.js"//打包后输出文件的文件名
	},
	resolve: {
		// 定义别名
		alias: {
			plugins: 'c:/User/17569/Desktop/webpack_demo/src/plugins', // 别名可以是目录
			myDialog: 'c:/User/17569/Desktop/webpack_demo/src/plugins/dialog/dialog.js' // 也可以是文件
		}
	}
};