(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Administrator on 2016/12/1.
 */
module.exports={
    add:function (a,b) {
        console.log(a+b)
    }
};
},{}],2:[function(require,module,exports){
/**
 * Created by Administrator on 2016/12/1.
 */
let b= "hello word";
document.getElementById('app').innerHTML = b;
},{}],3:[function(require,module,exports){
/**
 * Created by Administrator on 2016/12/1.
 */
var add = require('./js/add').add;
add(1,2);
var greet = require('./js/greet');
},{"./js/add":1,"./js/greet":2}]},{},[3]);
