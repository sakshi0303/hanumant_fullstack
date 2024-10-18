const express=require('express')
const { registerUser, updateUser, deleteUser, loginUser, getuserinfo,forgotpassword } = require('../controllers/UserControllor')
const checkToken = require('../middleware/checkToken')

const router=express.Router()

// #http://localhost:8080/users/update
router.post('/create',registerUser)
router.put('/update/:_id',checkToken,updateUser)
router.delete('/delete/:_id',checkToken,deleteUser)

router.post('/login',loginUser)
router.get('/getuserinfo',checkToken,getuserinfo)
router.post('/forgot-password',forgotpassword)

module.exports=router
