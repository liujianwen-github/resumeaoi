'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB_PATH = 'mongodb://dba:dba@47.104.7.232/personal_resume';
_mongoose2.default.connect(DB_PATH, {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
  useMongoClient: true
});
var db = _mongoose2.default.connection;

db.on('connected', function (callback) {
  console.log('mongoose connection open to ' + DB_PATH);
});
db.on('error', console.error.bind(console, 'connection error:'));
db.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});
// db.createUser({user:"dba",pwd:"dba",roles:[{role:"dbOwner",db:"personal_resume"}]})
exports.default = _mongoose2.default;