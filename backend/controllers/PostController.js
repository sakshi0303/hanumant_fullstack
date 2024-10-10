const Post = require("../models/PostSchema");
// run nodemon.js

const createPost=(async(req,res)=>{
    let {title,description,image,video}=req.body;
    let userid=req.user
    try {
        let data=await Post.create({
            title,
            description,
            image,
            video,
            userid
        })
        return res.json({msg:"post successfully created",success:true,data})
    
    } catch (error) {
        return res.json({msg:"error in post creation",success:false,error:error.message})
    }

}) 

const deletePost=(async(req,res)=>{
   let userid=req.user;
   let postid=req.params._id;
   try {
    let post=await Post.findById(postid)
    if (!post){
        return res.json({msg:"post not found",success:false})
    }
    console.log(post);
    console.log("post id-->",post.userid);
    console.log("user id-->",userid);

   if (userid.toString()!==post.userid.toString()){
    return res.json({msg:"post is not allowed to delete with this userid token",success:false})
   }

   let data=await Post.findByIdAndDelete(postid);
   return res.json({msg:"delete post successfully",success:true,data})
   
    
   } catch (error) {
    return res.json({msg:"error in  post deletion",success:false,error:error.message})
    
   }

})

const updatePost=(async(req,res)=>{
    let {title,description}= req.body;
    try {
    let userid=req.user;
    let postid=req.params._id;

    let post=await Post.findById(postid)
    console.log(post);
    console.log("post id-->",post.userid);
    console.log("user id-->",userid);

    if (post.userid.toString()!==userid.toString()){
        return res.json({msg:" not authorised to update this post",success:false})
    }
    
        let data= await Post.findByIdAndUpdate(postid,{$set:{title,description}},{new:true})
        return res.json({msg:"update post successfully",success:true,data})
        
    } catch (error) {
        return res.json({msg:"error in  post creation",success:false})
    }
})

const getAllPost=(async(req,res)=>{
    try{
        let data=await Post.find();
        return res.json({msg:"all post",success:true,data})

    }catch(error){
        return  res.json({msg:"error in geting all post",success:false})

    }
   
    res.send("getallpost is working ")
})


// #userid
const getYourPost=(async(req,res)=>{
    let userid=req.user;
    try {
        let data=await Post.find({userid})
        return res.json({msg:"all your post",success:true,data})
    } catch (error) {
        return  res.json({msg:"error in geting all post",success:false})
    }
    

})

module.exports={
    createPost,
    deletePost,
    updatePost,
    getAllPost,
    getYourPost
}