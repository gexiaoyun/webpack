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
output���ļ�����<p>
	path��  ·��<p>
	filename�� �����ļ�������<p>
	publicPath�� �����洢�ռ�     /temp/<p>
	
	
webpack-dev-server   webpack��һ��ط���������   //���� webpack-dev-server --iFrame/--inline --hot<p>
	--iFrame    �п�ܵ���ʽ<p>
	--inline    û�п�ܵ���ʽ<p>
	--hot        �Ȳ�� //��inline��ʱ�����µ�ǰ���ӵĵط�<p>
	
plugins��   webpack���  ������������<p>
	new webpack.HotModuleReplacementPlugin()    webpack-dev-server�Ȳ�εĲ��Ӧ��<p>
	
	
css-loader  ��������cssΪjs<p>
style       ��������css��require������<p>

module

