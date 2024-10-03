
// #put, same Object
// #patch: new create Object
// amdocs 
//7275536613: Shaurya Hanumant 

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

let User=require('../models/UserSchema')
const registerUser=async(req,res)=>{
    let {name, email,password,address}=req.body
    try{
        let Userexist=await User.findOne({email})
        if (Userexist){
            return res.json({msg:"user already exist",success:false})
        }
        else{
            let hashpassword= await bcrypt.hashSync(password, salt);
            let user= await User.create({
                name,email,
                password:hashpassword,
                address
            })
            res.json({msg:" user is registered successfully",success:true,user})
        }
}catch(error){
    res.json({msg:"error in creating user",error:error.message,success:false})
}
}

const loginUser=(req,res)=>{
    res.send("login api working good")

}

const updateUser=(req,res)=>{
    res.send("update api working good")

}

const deleteUser=(req,res)=>{
    res.send("delete api working good")

}

module.exports={
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}