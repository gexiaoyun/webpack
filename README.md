���ݰٶȴ��ε�webpack�γ���Ƶ��ϰ����ϰ�ļ�

��ϰ�������£�


2016/12/01

1��babel�İ�װ�����ã�����babel�İ�װ�����ã����ã�<p>
2��browser-sync ���ط���������<p>
3��browserify js������ߣ�����js�ļ�ͳһ���Ϊһ���ļ���<p>


2016/12/05<p>

1��webpack�İ�װ<p>
webpack.config.js���ã�<p>

entry��Ψһ����ļ�<p>

��ڿ�����json��ʽ����Ӷ����ڣ����磺
<p>entry:{</p>
	<p>app:__dirname + "/src/main.js",    //Ψһ����ļ�  __driname  ·��</p>
	<p>query:['jquery']</p>
<p>},</p>

output���ļ�����<p>
&nbsp;&nbsp;&nbsp;&nbsp;path��  ·��<p>
&nbsp;&nbsp;&nbsp;&nbsp;filename�� �����ļ�������<p>
&nbsp;&nbsp;&nbsp;&nbsp;publicPath�� �����洢�ռ�     /temp/<p>
	
	
webpack-dev-server   webpack��һ��ط���������   //���� webpack-dev-server --iFrame/--inline --hot<p>
&nbsp;&nbsp;&nbsp;&nbsp;--iFrame    �п�ܵ���ʽ<p>
&nbsp;&nbsp;&nbsp;&nbsp;--inline    û�п�ܵ���ʽ<p>
&nbsp;&nbsp;&nbsp;&nbsp;--hot        �Ȳ�� //��inline��ʱ�����µ�ǰ���ӵĵط�<p>
	
plugins��   webpack���  ������������<p>
&nbsp;&nbsp;&nbsp;&nbsp;new webpack.HotModuleReplacementPlugin()    webpack-dev-server�Ȳ�εĲ��Ӧ��<p>
	
	
css-loader  ��������cssΪjs<p>
style       ��������css��require������<p>

module  ���õĸ���loaderװ�ػ���λ��<p>
&nbsp;&nbsp;&nbsp;&nbsp;loader�ĸ������ܣ�
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test��������ʽ��ƥ���ļ�<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loader���ҵĽ�����<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;include/exclude: �ֶ���ӣ�������߲���Ҫ�����һЩ����<p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;query��Ϊloader�ṩһЩ���������,������<p>
&nbsp;&nbsp;&nbsp;&nbsp;css-loader��ʱ�����css���ò���  ������ǰ���!style!css! + �ļ�·��<p>

babel�İ�װ�����ã�new��<p>
&nbsp;&nbsp;&nbsp;&nbsp;loader ��װ���°�babel-core babel-loader babel-preset-es2015 babel-preset-react<p>
 
js��css�ֿ��������<p>
������ڵ�js����ȡcssȻ�󵥶����css��webpack��ʹ��extract-text-webpack-plugin�����ʵ��<p>




<p style="font-size:20px;color:red;">���html��� --html-webpack-plugin�����</p>

��ʹ��html-webpack-plugin�����ʱ��������

var HtmlWebpackPlugin = require('html-webpack-plugin');  //���html

Ȼ��Ҫ�ı�output�е�path��filenname��ֵ���磺

<p>output:{    	</p>
  <p>path: __dirname + "/build/js",</p>
  <p>filename:"/main.js"   </p>
<p>},</p>
��Ϊ
<p>output:{    	</p>
  <p>path: __dirname + "/build/",</p>
  <p>filename:"js/main.js"   </p>
<p>},</p>

���css��js�ֿ�����Ļ���var extractCss = new ExtractTextPlugin('css/main.css'); //�ô���õ�css�ŵ���һ���ļ���
css����·��ҲҪ�޸�


���ڲ����ʹ��new HtmlWebpackPlugin() ��ʹ�ò��������������ͨ�����·�ʽ������ģ��
<p>new HtmlWebpackPlugin({</p>
	<p>filename:'../index.html', //���ô�����html�ŵ�·��</p>
	<p>inject:'body',  //��template��Ƕ�뵽body����</p>
	<p>template:__dirname + '/src/tpl/appIndex.html',  ��ȡģ��</p>
<p>})</p>
 
 
 
<p style="font-size:20px;color:red;">webpackѹ��js�ļ� -- npm install uglify-js -g</p>
 
 ʹ�÷�����uglifyjs xxx(Ҫѹ���ļ�·��������) -o (Ҫѹ���ļ�·����������)
 ʹ�÷�����uglifyjs xxx(Ҫѹ���ļ�·��������) -m  -o (Ҫѹ���ļ�·����������)
 
 �ٷ��Ƽ�ʹ��ugliflyjs�ķ��������Զ�ѹ��js��
 <p>new webpack.optimize.UglifyJsPlugin({</p>
	<p>compress: {</p>
		<p>warnings: false</p>
	<p>}</p>
<p>})</p>



 
 
 
 
 
 