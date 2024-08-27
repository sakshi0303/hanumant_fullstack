let  usercollection=require('../models/UserSchema')


const createUser=(async(req,res)=>{
  let {name,email,password}=req.body;
  try{
    let data=await usercollection.create({
      name:name,
      email:email,
      password:password
    })
    res.json({msg:"user created successfully",status:true,data})
  }catch(error){
    res.json({msg:"error in user creation",status:false,error})
  }

})

const updateUser=(async(req,res)=>{
  let {name,email,password}=req.body
  let _id=req.params._id
  try{
    let data=await usercollection.findByIdAndUpdate(_id,{$set:{name:name,email:email,password:password}})
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

module.exports={
  createUser,
  updateUser,
  getAllUser,
  deleteUser
}