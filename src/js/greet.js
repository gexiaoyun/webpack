/**
 * Created by Administrator on 2016/12/1.
 */

var $ = require('jquery');
var stuJson = require('../json/stu.json');

var txt = 'my name is:' + stuJson.name;






$('#app').html('Hello World' + '<p>'+ txt +'</p>')
