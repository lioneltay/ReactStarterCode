/* NOTES
	HOT MODULE REPLACEMENT
	-style loader has hmr built in
	-react/babel? requires babel-preset-react-hmre
*/

import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const NPM_LAUNCH_COMMAND = process.env.npm_lifecycle_event
const SERVER_BUILD = NPM_LAUNCH_COMMAND === 'build'
process.env.BABEL_ENV = NPM_LAUNCH_COMMAND

const VENDOR_LIBS = [
	'react',
	'redux', 
	'react-redux', 
	'react-dom',
	'redux-thunk', 
	'react-router',
]

const base = {
	entry: {
		bundle: './src/index.jsx',
		vendor: VENDOR_LIBS,
	},
	resolve: {
		alias: {
			styles: path.join(__dirname, '/src/styles'),
		},
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: ['.js', '.jsx']
  },
	devtool: 'cheap-module-inline-source-map',
}

const dev = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: SERVER_BUILD ? '/MathSite/dist' : '/',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					}, 
					'image-webpack-loader',
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
		hot: true,
		inline: true,
	},
}

const prod = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		publicPath: SERVER_BUILD ? '/MathSite/dist' : '/',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.jsx?$/,
				exclude: /node_modules/,
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: ['css-loader', 'sass-loader']
				}),
				test: /\.scss$/,
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }
					}, 
					'image-webpack-loader',
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor', 'manifest'],
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
	],
}

export default SERVER_BUILD
	?	{ ...base, ...prod }
	: { ...base, ...dev }