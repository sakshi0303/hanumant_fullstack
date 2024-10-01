const express=require('express')
const { registerUser, updateUser, deleteUser, loginUser } = require('../controllers/UserControllor')

const router=express.Router()

// #http://localhost:8080/users/update
router.post('/create',registerUser)
router.put('/update',updateUser)
router.delete('/delete',deleteUser)
router.post('/login',loginUser)

module.exports=router
