根据百度传课的webpack课程视频练习的练习文件

练习内容如下：


2016/12/01

1、babel的安装和引用（包括babel的安装，引用，配置）
2、browser-sync 本地服务器配置
3、browserify js打包工具（所有js文件统一打包为一个文件）


----------


2016/12/05

1、webpack的安装
webpack.config.js配置：

entry：唯一入口文件

入口可以用json形式来添加多个入口，比如：

    entry:{
        app:__dirname + "/src/main.js",    //唯一入口文件  __driname  路径
    	query:['jquery']
    },

output：文件出口
path：  路径
filename： 出口文件的名称
publicPath： 公共存储空间     /temp/
	
	
webpack-dev-server   webpack的一款本地服务器依赖   //命令 

    webpack-dev-server --iFrame/--inline --hot
    --iFrame    有框架的形式
    --inline    没有框架的形式
    --hot        热插拔 //用inline的时候会更新当前增加的地方
	
plugins：   webpack插件  插件里面放数组
new webpack.HotModuleReplacementPlugin()    webpack-dev-server热插拔的插件应用<p>
	
	
css-loader  用来编译css为js
style       用来编译css用require来加载

module  引用的各个loader装载机的位置
loader的各个功能：
test：正则表达式来匹配文件
loader：我的解释器
include/exclude: 手动添加，处理或者不需要处理的一些东西
query：为loader提供一些额外的配置,比如插件
css-loader的时候，如果css引用不到  尝试在前面加!style!css! + 文件路劲

**babel的安装和引用（new）**
loader 安装以下包babel-core babel-loader babel-preset-es2015 babel-preset-react
 
 
**js和css分开打包方法**
在主入口的js中提取css然后单独打包css在webpack中使用extract-text-webpack-plugin插件来实现


----------


2016/12/26

**打包html输出 --html-webpack-plugin插件：**

在使用html-webpack-plugin插件的时候，先引入

var HtmlWebpackPlugin = require('html-webpack-plugin');  //打包html

然后要改变output中的path和filenname的值，如：

    output:{    	
      path: __dirname + "/build/js",
      filename:"/main.js"   
    },

改为

    output:{    	
      path: __dirname + "/build/",
      filename:"js/main.js"   
    },

如果css和js分开打包的话，`
var extractCss = new ExtractTextPlugin('css/main.css');` //让打包好的css放到另一个文件夹
css保存路径也要修改

并在插件块使用new HtmlWebpackPlugin() 来使用插件，插件里面可以通过以下方式来加载模板

    new HtmlWebpackPlugin({
    	filename:'../index.html', //设置打包后的html放的路径
    	inject:'body',  //把template的嵌入到body里面
        template:__dirname+'/src/tpl/appIndex.html',  读取模板
    })

 
 
 
**webpack压缩js文件 -- npm install uglify-js -g**
 
 使用方法：uglifyjs xxx(要压缩文件路劲加名称) -o (要压缩文件路劲加新名称)
 使用方法：uglifyjs xxx(要压缩文件路劲加名称) -m  -o (要压缩文件路劲加新名称)
 
 官方推荐使用ugliflyjs的方法：（自动压缩js）

    new webpack.optimize.UglifyJsPlugin({
    	compress: {
        	warnings: false
        }
    })


## 如何单独打包一个js ##

    entry:{
    	app:__dirname + "/src/main.js",    //唯一入口文件  __driname  路径
    	more:[__dirname + "/src/a.js",__dirname + "/src/b.js"],
    	query:['jquery']
    }
如果入口的时候有多个入口

    new webpack.ProvidePlugin({   //webpack提供的插件
    			$:'jquery'
    		}),
    		//webpack共享插件块
    		new webpack.optimize.CommonsChunkPlugin('query','lib/jquery.min.js')

1、如要引用jquery的话，需明白一个全局，然后再用共享插件块共享，
2、如果一个入口为数组时候

    new webpack.optimize.CommonsChunkPlugin({
        names:['a','b']  //不需要写js后缀
    })


----------
## file-loader url-loader的用法 ##

    {
    			test:/\.png|.jpg|.jpeg$/,
    			loader:'file-loader?limit=1000&name=/build/images/[hash:8].[name].[ext]'  //limit：小于所设值得时候就转存,name=8位随机哈希值，ext：原后缀
    			
    		}


----------

## 如何处理html中的图片地址（含tpl中的） ##
1.先要设置output出口中的publickPath（公共地址）

    output:{
          path: __dirname + "/build/",
          filename:"js/main.js",
          publicPath:'127.0.0.1:8080/build'
    },
2、设置loader

    {
		test:/\.html$/,
		loader:'html-loader'
	}
3、然后设置file-loader中的图片路劲-主要在name这块

    {
		test:/\.png|.jpg|.jpeg$/,
		loader:'file-loader?limit=1000&name=/images/[hash:8].[name].[ext]'  //limit：小于所设值得时候就转存,name=8位随机哈希值，ext：原后缀
	}
	


----------
## webpack运行环境配置 ##
1、package配置：

    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "inline": "webpack-dev-server --inline --hot",
    "iframe": "webpack-dev-server --iFrame --hot",
    "pro": "set NODE_ENV=pro&& webpack",
    "dev": "set NODE_ENV=dev&& webpack"
  }
  
2、config配置

    //环境判断
        if(process.env.NODE_ENV === 'dev'){
        	//开发环境
        	console.log('开发环境');
        	module.exports.watch = true
        }else{
        	//生产环境
        	console.log('生产环境')
        }


    		
    		
    		
	

 
 
 
 
 