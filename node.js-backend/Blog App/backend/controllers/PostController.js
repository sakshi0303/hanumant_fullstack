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

const getALLUsersPosts=(()=>{

})

const deletePost=(()=>{

})

const updatePost=(()=>{

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