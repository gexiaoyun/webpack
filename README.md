根据百度传课的webpack课程视频练习的练习文件

练习内容如下：


2016/12/01

1、babel的安装和引用（包括babel的安装，引用，配置）<p>
2、browser-sync 本地服务器配置<p>
3、browserify js打包工具（所有js文件统一打包为一个文件）<p>


2016/12/05<p>

1、webpack的安装<p>
webpack.config.js配置：<p>

entry：唯一入口文件<p>
output：文件出口<p>
	path：  路径<p>
	filename： 出口文件的名称<p>
	publicPath： 公共存储空间     /temp/<p>
	
	
webpack-dev-server   webpack的一款本地服务器依赖   //命令 webpack-dev-server --iFrame/--inline --hot<p>
	--iFrame    有框架的形式<p>
	--inline    没有框架的形式<p>
	--hot        热插拔 //用inline的时候会更新当前增加的地方<p>
	
plugins：   webpack插件  插件里面放数组<p>
	new webpack.HotModuleReplacementPlugin()    webpack-dev-server热插拔的插件应用<p>
	
	
css-loader  用来编译css为js<p>
style       用来编译css用require来加载<p>

module

