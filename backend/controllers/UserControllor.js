
// #put, same Object
// #patch: new create Object
// amdocs 
//7275536613: Shaurya Hanumant 

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

let User=require('../models/UserSchema')
const registerUser=async(req,res)=>{
    let {name, email,password,address}=req.body
    if (!password){
        return res.json({msg:"password is mandartory field",success:false})
    }
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

const loginUser=async(req,res)=>{

    let {email,password}=req.body
    try{
        let checkuser= await User.findOne({email})
        console.log(checkuser)
        if (checkuser){

            let checkpassword=await bcrypt.compareSync(password,checkuser.password)
            if (checkpassword){
                return res.json({msg:"user login successfully",success:true,usr:checkuser})
            }else{
                return res.json({msg:"invalid password",success:false})
            }

        }else{
            res.json({msg:"user not fond",success:false})
        }

    }catch(error){
        res.json({msg:"error in login in user",success:false,error:error.message})

    }

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