const postschema=require('../models/PostSchema')
const createPost=(async(req,res)=>{
  let {title,description,image,video,user}=req.body
  try{
    let data=await postschema.create({title,description,image,video,user})
    return res.json({msg:"post successfully created",sucess:true,data})

  }catch(error){
    return res.json({msg:"error in post creation",sucess:false,data})

  }
  
})
//popluate will expand the the collection, it should have referernce and type: mongoose.Schema.Types.ObjectId
//user is the key in Userschema: like video, user=
const getALLUsersPosts=(async (req,res)=>{
  try{
  let data=await postschema.find().populate({path:'user'})
  return res.json({msg:"all posts fetch",sucess:true,data})
}catch(error){
  return res.json({msg:"error in post fetching",sucess:false,data})

}
})

const deletePost=(async(req,res)=>{

  let id=req.params._id
  try{
    let data=await postschema.findByIdAndDelete(id)
    return res.json({msg:" postid deleted successfully",sucess:true,data})
  }catch(error){
    return res.json({msg:"error in post id deletion",sucess:false,error})

  } 
})

const updatePost=(async(req,res)=>{
  let {title,description,image,video}=req.body;
  let id=req.params._id
  try{
    let data=await postschema.findByIdAndUpdate(id,{$set:{title,description,image,video}},{new:true})
    return res.json({msg:"post updated successfully",sucess:true,data})

  }catch(error){
    return res.json({msg:" error in updating post ",sucess:false,error})


  }

})

const getSingleUserPosts=(async(req,res)=>{
  let {title,description,image,video,user}=req.body
  let user_id=req.params._id
  try{
    let data=await postschema.find({user:user_id})
    return res.json({msg:"get single user posts",sucess:true,data})

  }catch(error){
    return res.json({msg:"error in fetching single user posts",sucess:false,error})

  }

})

module.exports={
  createPost,
  getALLUsersPosts,
  deletePost,
  updatePost,
  getSingleUserPosts
}