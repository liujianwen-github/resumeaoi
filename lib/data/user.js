'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dataConnection = require('./dataConnection');

var _dataConnection2 = _interopRequireDefault(_dataConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _dataConnection2.default.Schema;

// 创建模型
var userSchema = new Schema({
  username: { type: String }, //用户账号
  userpwd: { type: String }, //密码
  userage: { type: Number }, //年龄
  logindate: { type: Date //最近登录时间
  } });
// 模型生成model
var userModel = _dataConnection2.default.model('Users', userSchema);
var userData = {
  insert: function insert(data, callback) {
    var user = new userModel(data);
    user.save(function (err, res) {
      if (err) {
        console.log('ERROR: ' + err);
        callback(err);
      } else {
        console.log('RES: ' + res);
        callback(res);
      }
    });
  },
  getData: function getData(params, callback) {
    console.log("准备查询中...");
    var user = new userModel();
    // params = JSON.stringify(params)
    // console.log(`请求参数为 ${params}`)
    userModel.find(params, {}, function (err, res) {
      if (err) {
        console.log('ERROR: ' + err);
        callback(err);
      } else {
        console.log('RES: ' + res);
        callback(res);
      }
    });
  }
};
exports.default = userData;