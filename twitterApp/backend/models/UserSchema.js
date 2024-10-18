const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"password is required"],
        
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
UserSchema.add({
    followers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    resetToken:{
        type:String,
        default:null
    }

})

module.exports=mongoose.model('user',UserSchema)

