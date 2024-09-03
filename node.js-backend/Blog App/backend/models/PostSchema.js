const mongoose  = require("mongoose");

const postSchema=new mongoose.Schema({
  title:{
    type:String
  },
  description:{
    type:String
  },
  image:{
    type:String
  },
  video:{
    type:String
  },
  //to get the object id and use keyword ref with user from userschema collection
  user:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
  },
  // isadmin:{
  //   type:Boolean,
  //   default:false
  // }
}, {
  timestamps:true
})

module.exports=mongoose.model('post',postSchema)