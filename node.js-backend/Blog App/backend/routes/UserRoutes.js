const express=require('express')
const {createUser,updateUser,deleteUser,getAllUser, loginuser}=require('../controllers/UserController')

const router=express.Router()

router.get('/getAll',getAllUser)
router.post('/create',createUser)
router.delete('/delete/:_id',deleteUser)
router.put('/update/:_id',updateUser)
router.post('/login',loginuser)

module.exports=router


