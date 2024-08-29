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
  videp:{
    type:String
  },
  user:{
    type:String,
    required:true
  },
  // isadmin:{
  //   type:Boolean,
  //   default:false
  // }
}, {
  timestamps:true
})

module.exports=mongoose.model('post',postSchema)