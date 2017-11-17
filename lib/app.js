'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _controller = require('./controller/controller.js');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hostName = "127.0.0.1";
var port = 3000;
var server = _http2.default.createServer(function (req, res) {

  // 允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  // 解析地址
  _controller2.default.arp(req, res);
});

server.listen(port, hostName, function () {
  console.log('server in running at ' + hostName + ':' + port + ' ');
});