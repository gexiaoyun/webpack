/**
 * Created by Administrator on 2016/12/5.
 */

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //js和css分割出来的插件
var extractCss = new ExtractTextPlugin('css/main.css'); //让打包好的css放到另一个文件夹

var HtmlWebpackPlugin = require('html-webpack-plugin');  //打包html


module.exports={
    entry:{
    	app:__dirname + "/src/main.js",    //唯一入口文件  __driname  路径
    	query:['jquery']
    },
    output:{
          path: __dirname + "/build/",
          filename:"js/main.js"     
    },
    /*devServer:{             //webpack-dev-server配置
    	contentBase:"./",   //设置服务器根目录
    	host:'172.16.11.12',
    	post:'8031',
    	color:true
    },*/
    module:{
    	loaders:[
//  		{
//  			test:/\.css$/,
//  			loader:'style-loader!css-loader'
//  		},
			{
				test:/\.css$/,
				loader:extractCss.extract("style-loader","css-loader")
			},
    		{
    			test:/\.less$/,
    			loader:'style!css!less'
    		},
    		{
    			test:/\.json$/,
    			loader:'json'
    		},
    		{
    			test:/\.js&/,
    			exclude:/node_modules/,
    			loader:'babel',
    			query:{
    				presets:['es2015','react']
    			}
    		}
    	]
    },
    plugins:[                   //webpack 框架
    	new webpack.HotModuleReplacementPlugin(),
    	extractCss,
    	new HtmlWebpackPlugin({
    		filename:'../index.html', //设置打包后的html放的路径
    		inject:'body',  //把script嵌入到body里面
    		template:__dirname + '/src/tpl/appIndex.html',  
    	}),
    	new webpack.optimize.UglifyJsPlugin({   //自动压缩打包js
		    compress: {
		        warnings: false
		    }
		}),
		new webpack.ProvidePlugin({   //webpack提供的插件
			$:'jquery'
		}),
		//webpack共享插件块
		new webpack.optimize.CommonsChunkPlugin('query','lib/jquery.min.js')
    ],
    //单独的扩展
    externals:{}
    watch:false   //自动监控
    	





}
