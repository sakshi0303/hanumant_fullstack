const express=require('express')
const { getalluser, createUser, deleteuser, updateuser } = require('../controller/usercontroller')
const router=express.Router()

router.get('/getall',getalluser)
router.post('/create',createUser)
router.delete('/delete',deleteuser)
router.put('/update',updateuser)

module.exports=router