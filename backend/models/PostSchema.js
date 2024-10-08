const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    title:String,
    description:{
        type:String,
    },
    image:{
        type:String,
    },
    video:{
        type:String,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
   
    
},{timestamps:true})

module.exports=mongoose.model('posts',PostSchema)