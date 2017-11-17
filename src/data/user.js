import mongoose from './dataConnection'
const Schema = mongoose.Schema

// 创建模型
const userSchema = new Schema({
  username : { type: String },                    //用户账号
  userpwd: {type: String},                        //密码
  userage: {type: Number},                        //年龄
  logindate : { type: Date}                       //最近登录时间
})
// 模型生成model
let userModel = mongoose.model('Users',userSchema)
const userData = {
  insert(data,callback){
    let user = new userModel(data)
    user.save((err,res)=>{
      if(err){
        console.log(`ERROR: ${err}`)
        callback(err)
      }else{
        console.log(`RES: ${res}`)
        callback(res)
      }
    })
  },
  getData(params,callback){
    console.log("准备查询中...")    
    let user = new userModel()
    // params = JSON.stringify(params)
    // console.log(`请求参数为 ${params}`)
    userModel.find(params,{},(err,res)=>{
      if(err){
        console.log(`ERROR: ${err}`)
        callback(err)
      }else{
        console.log(`RES: ${res}`)
        callback(res)
      }
    })
  }
}
export default userData


