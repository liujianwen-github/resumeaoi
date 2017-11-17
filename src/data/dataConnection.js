import mongoose from 'mongoose'


const DB_PATH='mongodb://dba:dba@47.104.7.232/personal_resume'
mongoose.connect(DB_PATH, {
socketTimeoutMS: 0,
keepAlive: true,
reconnectTries: 30,
useMongoClient:true
})
const db = mongoose.connection

db.on('connected',(callback)=>{
console.log(`mongoose connection open to ${DB_PATH}`)
})
db.on('error',console.error.bind(console, 'connection error:'))
db.on('disconnected', function () {    
console.log('Mongoose connection disconnected');  
});
// db.createUser({user:"dba",pwd:"dba",roles:[{role:"dbOwner",db:"personal_resume"}]})
export default mongoose
