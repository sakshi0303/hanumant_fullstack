const express=require('express')
const { createPost, deletePost, updatePost, getALLUsersPosts, getSingleUserPosts } = require('../controllers/PostController')

const router =express.Router()

router.post('/create',createPost)
router.delete('/delete/:_id',deletePost)
router.put('/update/:_id',updatePost)
router.get('/getall',getALLUsersPosts)
router.get('/getuserAll/:_id',getSingleUserPosts)

module.exports=router