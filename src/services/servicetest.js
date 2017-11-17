import http from 'http'
import Url from 'url'
import querystring from 'querystring'
import userData from '../data/user'

const str= 'this param is'
/**
 * personal resume
 * @param {Object} param 
 * @param {function} callback 
 */

const personalResume = function(params,callback){
  console.log(`地址解析中...`)
  
  // let data = {
  //   username : 'test1305',                    //用户账号
  //   userpwd: '123',                        //密码
  //   userage: 1,                        //年龄
  //   logindate : Date.now() 
  // }
  // userData.insert(params,(msg)=>{
  //   callback(msg)
  // });
  userData.getData(params,(msg)=>{
    callback(msg)
  })
}
export {personalResume}