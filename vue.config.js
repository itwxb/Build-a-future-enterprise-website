// vue.config.js
module.exports = {
	publicPath: "./",

	// 图片优化代码
	//    chainWebpack: config => {
	//         config.module
	//             .rule('image')
	//             .test(/\.(png|jpe?g|gif)(\?.*)?$/)
	//             .use('image-webpack-loader')
	//             .loader('image-webpack-loader')
	//             .options({
	//                 // 此处为ture的时候不会启用压缩处理,目的是为了开发模式下调试速度更快
	//                 disable: process.env.NODE_ENV == 'development' ? true : false
	//             })
	//             .end()
	//     }
};
