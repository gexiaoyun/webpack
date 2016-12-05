/**
 * Created by Administrator on 2016/12/5.
 */

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    entry: __dirname + "/src/main.js",    //唯一入口文件  __driname  路径
    output:{
        path: __dirname + "/build/js",
        filename:"main.js",
        publicPath:"/temp/"   
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
				loader:ExtractTextPlugin.extract("style-loader","css-loader")
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
    	new ExtractTextPlugin("main.css")
    ]            
    	





}
