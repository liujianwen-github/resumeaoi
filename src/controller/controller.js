import http from 'http'
import Url from 'url'
import querystring from 'querystring'

import {personalResume} from '../services/servicetest'

const controller = {
  /**
   * 
   * @param {String} path 解析的路径
   * @param {Object} res 返回结果
   */
  arp(req,res){
    let url_info = Url.parse(req.url)
    console.log(url_info.path)
    let reqPath=url_info.path.split('?')[0]
    let reqParams=url_info.path.split('?')[1]
    if(reqPath==='/personalResume'){
      // console.log(`params is ${querystring.parse(url_info.query)}`)
      // 获取参数
      const params = querystring.parse(url_info.query)
      console.log(params)
      personalResume(params,(data)=>{
        res.writeHead('200',{'Content-Type':'application/json;charset=utf-8'})
        res.end(JSON.stringify(data))
      })
    }else if(reqPath==='/favicon.ico'){
      res.writeHead('404')
      res.end()
    }
  }
}
export default controller