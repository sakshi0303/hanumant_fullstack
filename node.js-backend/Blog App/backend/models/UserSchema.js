const mongoose=require('mongoose')
let UserSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    minlength:3,
  },
  email:{
    type:String,
    unique:true,
    require:true
  },
  password:{
    type:String,
    require:true

  }
})

//User is the collection
module.exports=mongoose.model('User',UserSchema)