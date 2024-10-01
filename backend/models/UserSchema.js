const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        maxlength:10
    },
    address:{
        type:String
    },
    // #seach person s=profile picture
    ProfilePic:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"

    },
    CoverPic:{
        type:String
    }
},{
    timestamps:true
})

module.exports=mongoose.model('user',UserSchema)

