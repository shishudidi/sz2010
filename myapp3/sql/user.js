//test是一个测试文件 不要在项目中使用  


  
const db = require('./db.js')
 

const userSchema = new db.mongoose.Schema ({
    "username":{type:String},
    "pwd":{type:String},
})

 
module.exports = db.mongoose.model("user",userSchema)
