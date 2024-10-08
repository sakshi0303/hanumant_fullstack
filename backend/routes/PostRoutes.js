const express=require('express')
const { createPost, deletePost, updatePost, getAllPost, getYourPost } = require('../controllers/PostController')

const router=express.Router()

router.post('/create',createPost)
router.delete('/delete/:_id',deletePost)
router.put('/update/:_id',updatePost)
router.get('/getallpost',getAllPost)
router.get('/getyourpost',getYourPost)



module.exports=router;