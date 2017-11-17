import http from 'http'
import Url from 'url'
import querystring from 'querystring'

import pathController from './controller/controller.js'



const hostName="127.0.0.1"
const port =3000
const server=http.createServer((req,res)=>{
  
  // 允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*")
  // 解析地址
  pathController.arp(req,res)
  
})

server.listen(port,hostName,()=>{
  console.log(`server in running at ${hostName}:${port} `)
})