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
          filename:"js/main.js",
          publicPath:'/build'  //公共地址
    },
    devServer:{             //webpack-dev-server配置
    	contentBase:"./",   //设置服务器根目录
    	host:'172.16.11.12',
    	post:'8031',
    	color:true
    },
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
    			test:/\.js$/,
    			exclude:/node_modules/,
    			loader:'babel',
    			query:{
    				presets:['es2015','react']
    			}
    		},
    		{
    			test:/\.png|.jpg|.jpeg$/,
    			loader:'url-loader?limit=5000&name=/images/[hash:8].[name].[ext]'  //limit：小于所设值得时候就转存,name=8位随机哈希值，ext：原后缀
    			
    		},
    		{
    			test:/\.html$/,
    			loader:'html-loader'
    		}
    	]
    },
    plugins:[                   //webpack 框架
    	new webpack.HotModuleReplacementPlugin(),  //热拔插
    	extractCss, //分保存css
    	new HtmlWebpackPlugin({        //html打包部分
    		filename:'../index.html', //设置打包后的html放的路径
    		inject:'body',  //把script嵌入到body里面
    		template:__dirname + '/src/tpl/appIndex.html',  
    	}),
    	new webpack.optimize.UglifyJsPlugin({   //自动压缩打包js
		    compress: {
		        warnings: false
		    }
		}),
		
		//写公共插件，比如jquery
		new webpack.ProvidePlugin({   //webpack提供的插件
			$:'jquery'
		}),
		//webpack共享插件块
		new webpack.optimize.CommonsChunkPlugin('query','lib/jquery.min.js')
    ],
    //单独的扩展
    externals:{},
    //watch:false   //自动监控  	
}

//环境判断
if(process.env.NODE_ENV === 'dev'){
	//开发环境
	console.log('开发环境');
	module.exports.watch = true
}else{
	//生产环境
	console.log('生产环境')
}

