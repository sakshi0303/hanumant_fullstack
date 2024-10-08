
// #put, same Object
// #patch: new create Object
// amdocs 
//7275536613: Shaurya Hanumant 

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

var jwt = require('jsonwebtoken');
var JWT_SECRET="idjwttoaknsakshi"

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
                var token = jwt.sign({ _id:checkuser.id }, JWT_SECRET);
                return res.json({msg:"user login successfully",success:true,usr:token})
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

const updateUser=async(req,res)=>{
    // res.send("update api working good")
    let userid=req.user
    let _id=req.params._id;
    if(userid!==_id){
       return res.json({msg:"unauthorised",success:false})
    }
    let {name,password,address,ProfilePic,CoverPic}=req.body
    let hashpassword;
    if (password){
        hashpassword = bcrypt.hashSync(password, salt);
    }
    
    try{
        let data=await User.findByIdAndUpdate(userid,{$set:{name,password:hashpassword,address,ProfilePic,CoverPic}},{new:true})
        return res.json({msg:"data updated successdully",success:true,data})


    }catch(e){
        return res.json({msg:"error in updating data",success:false,error:e.message})

    }

}

const deleteUser=async(req,res)=>{
    let id=req.params._id
    let _id=req.user
    try{
        if (id===_id){
            await User.findByIdAndDelete(_id)
            return res.json({msg:"user deleted successfully",success:true,})
    
        }else{
            return res.json({msg:"You can delete your own account",success:false})
        }

    }catch(e){
        return res.json({msg:"Error while delteing user",success:false,error:e.message})

    }

    // let data=await User.findByIdAndDelete(id)
    // res.json({msg:"user deleted",usr:data})

}

module.exports={
    registerUser,
    loginUser,
    updateUser,
    deleteUser
}