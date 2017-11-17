'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _servicetest = require('../services/servicetest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
  /**
   * 
   * @param {String} path 解析的路径
   * @param {Object} res 返回结果
   */
  arp: function arp(req, res) {
    var url_info = _url2.default.parse(req.url);
    console.log(url_info.path);
    var reqPath = url_info.path.split('?')[0];
    var reqParams = url_info.path.split('?')[1];
    if (reqPath === '/personalResume') {
      // console.log(`params is ${querystring.parse(url_info.query)}`)
      // 获取参数
      var params = _querystring2.default.parse(url_info.query);
      console.log(params);
      (0, _servicetest.personalResume)(params, function (data) {
        res.writeHead('200', { 'Content-Type': 'application/json;charset=utf-8' });
        res.end(JSON.stringify(data));
      });
    } else if (reqPath === '/favicon.ico') {
      res.writeHead('404');
      res.end();
    }
  }
};
exports.default = controller;