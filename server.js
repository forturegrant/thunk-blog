const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const path = require('path')

new WebpackDevServer(webpack(config), {
	//publicPath: config.output.publicPath,
	hot: true,
}).listen(3000, 'localhost', function(err) {
	console.log(3000)
	if (err) {
		console.log(err)
	}
})