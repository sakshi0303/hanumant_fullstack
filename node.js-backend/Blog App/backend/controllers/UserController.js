let  usercollection=require('../models/UserSchema')
let bcrypt =require('bcryptjs')
var salt = bcrypt.genSaltSync(10);

const createUser=(async(req,res)=>{
  let {name,email,password}=req.body;

  if(!name){
    return res.json({msg:"name is requied",sucess:false})
  }
  if(!email){
    return res.json({msg:"email is required",sucess:false})
  }
  if(!password){
    return res.json({msg:"password is required",sucess:false})
  }
  
  try{
    var hashPassword = bcrypt.hashSync(password, salt);
    let data=await usercollection.create({
      name,
      email,
      password: hashPassword
    })
    res.json({msg:"user created successfully",status:true,data})
  }catch(error){
    res.json({msg:"error in user creation",status:false,error})
  }

})


const updateUser=(async(req,res)=>{
  let {name,password}=req.body
  if(!name && !password){
    return res.json({msg:"name or password is required",sucess:false})
  }
  let _id=req.params._id
  //haspassword with let and const has undefined and block scope so that if password is not sent then also findByIdAndUpdate work
  let hashPassword;
  if (password){
    hashPassword=bcrypt.hashSync(password,salt)
  }
  try{
    let data=await usercollection.findByIdAndUpdate(_id,{$set:{name,password:hashPassword}},{new:true})
    //let data=await usercollection.findOneAndUpdate({email:email},{$set:{name:name,email:email,password:password}},{new:true})
    res.json({msg:"user updated successfully",sucess:true,data})

  }catch(error){
    res.json({msg:"error in user updation",status:false,error})
  }

})

const getAllUser=(async(req,res)=>{
  
  try{
    let data=await usercollection.find()
    res.json({msg:'all user fetched successfully',sucess:true,data})

  }catch(error){
    res.json({msg:'error in get All user',sucess:false,error})
  }


})

const deleteUser=(async(req,res)=>{
  let {name,email,password}=req.body
  let _id=req.params._id
  try{
    let data=await usercollection.findByIdAndDelete(_id,{$set:{name:name,email:email,password:password}})
    res.json({msg:'Delete user successfully',sucess:true,data})

  }catch(error){
    res.json({msg:'error in delete user',sucess:false,error})
  }

})

const loginuser=(async(req,res)=>{
  const {email,password}=req.body
  try{
    let checkuser=await usercollection.findOne({email})
  if(checkuser){
    //password: is the original password sent in postman requies, loginuser.password is the encrpted password in mongodb compass
    let checkpassord=bcrypt.compareSync(password, checkuser.password);
    if(checkpassord){
      return res.json({msg:"user login successfully",success:true,user:checkuser})

    }else{
      return res.json({msg:"Password not correct, invalid credential",success:false})

    }
    

  }else{
    return res.json({msg:"user not found",sucess:false})
  }

  }catch(error){

    res.json({msg:"error in login user",success:false,error:error.msg})

  }

})

module.exports={
  createUser,
  updateUser,
  getAllUser,
  deleteUser,
  loginuser
}