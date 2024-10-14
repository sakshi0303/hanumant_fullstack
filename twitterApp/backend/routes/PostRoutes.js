const express=require('express')
const { createPost, deletePost, updatePost, getAllPost, getYourPost } = require('../controllers/PostController')
const router=express.Router()
const checkToken=require('../middleware/checkToken') 
router.post('/create',checkToken,createPost)
router.delete('/delete/:_id',checkToken,deletePost)
router.put('/update/:_id',checkToken,updatePost)
router.get('/getallpost',getAllPost)
router.get('/getyourpost',checkToken,getYourPost)



module.exports=router;