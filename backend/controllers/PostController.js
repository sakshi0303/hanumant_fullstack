
const createPost=(async(req,res)=>{
    res.send("createPost is working")

}) 

const deletePost=(async(req,res)=>{
    res.send("delete post is working")

})

const updatePost=(async(req,res)=>{
    res.send("update post is working")
})

const getAllPost=(async(req,res)=>{
    res.send("getallpost is working ")
})

const getYourPost=(async(req,res)=>{
    res.send("get your post is working")

})

module.exports={
    createPost,
    deletePost,
    updatePost,
    getAllPost,
    getYourPost
}