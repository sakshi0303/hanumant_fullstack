const mongoose = require('mongoose');

const userschema=mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:3,
    maxlength:10,
    trim:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true,
  }
})

module.exports=mongoose.model('user',userschema)