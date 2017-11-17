'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalResume = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _user = require('../data/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = 'this param is';
/**
 * personal resume
 * @param {Object} param 
 * @param {function} callback 
 */

var personalResume = function personalResume(params, callback) {
  console.log('\u5730\u5740\u89E3\u6790\u4E2D...');

  // let data = {
  //   username : 'test1305',                    //用户账号
  //   userpwd: '123',                        //密码
  //   userage: 1,                        //年龄
  //   logindate : Date.now() 
  // }
  // userData.insert(params,(msg)=>{
  //   callback(msg)
  // });
  _user2.default.getData(params, function (msg) {
    callback(msg);
  });
};
exports.personalResume = personalResume;